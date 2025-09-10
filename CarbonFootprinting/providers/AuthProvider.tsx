// providers/AuthProvider.tsx - Add debug logs
import createContextHook from "@nkzw/create-context-hook";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { User } from "@/types";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/constants/firebase';

export const [AuthProvider, useAuth] = createContextHook(() => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);

  // Listen to Firebase auth state changes
  useEffect(() => {
    console.log('🔄 Setting up auth listener...');
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log('🔥 Auth state changed:', {
        hasUser: !!firebaseUser,
        email: firebaseUser?.email
      });

      if (firebaseUser) {
        console.log('✅ User authenticated, loading profile...');
        await loadUserProfile(firebaseUser);
      } else {
        console.log('❌ No authenticated user');
        setUser(null);
      }
      setLoading(false);
      setInitialized(true);
    });

    return unsubscribe;
  }, []);

  // Load user profile from Firestore
  const loadUserProfile = async (firebaseUser: FirebaseUser) => {
    try {
      console.log('📄 Loading user profile from Firestore...');
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data() as User;
        console.log('✅ User profile loaded:', { email: userData.email });
        setUser(userData);
      } else {
        console.log('⚠️ User profile not found in Firestore');
        // Create basic user profile if doesn't exist
        const basicProfile: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email!,
          firstName: firebaseUser.displayName?.split(' ')[0] || '',
          lastName: firebaseUser.displayName?.split(' ')[1] || '',
          displayName: firebaseUser.displayName || firebaseUser.email,
          createdAt: Date.now(),
        };
        await setDoc(doc(db, 'users', firebaseUser.uid), basicProfile);
        setUser(basicProfile);
      }
    } catch (error) {
      console.error('❌ Error loading user profile:', error);
    }
  };

  // Auto-redirect based on auth state - WITH DEBUG
  useEffect(() => {
    console.log('🧭 Navigation check:', {
      initialized,
      hasUser: !!user,
      loading,
      userEmail: user?.email
    });

    if (!initialized) {
      console.log('⏳ Not initialized yet, waiting...');
      return;
    }

    if (user) {
      console.log('🎯 User found, redirecting to tabs...');
      router.replace("/(tabs)");
    } else if (!loading) {
      console.log('🔓 No user, redirecting to login...');
      router.replace("/(auth)/login");
    }
  }, [user, loading, initialized]);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      console.log('🔐 Starting login for:', email);

      await signInWithEmailAndPassword(auth, email, password);
      console.log('✅ Firebase login successful');
      // User state updated automatically by onAuthStateChanged
    } catch (error: any) {
      console.error('❌ Login error:', error);
      const message = error.code === 'auth/invalid-credential' ? 'Invalid email or password' :
        error.code === 'auth/user-not-found' ? 'No account found with this email' :
          error.code === 'auth/wrong-password' ? 'Incorrect password' :
            'Login failed. Please try again.';
      Alert.alert("Login Error", message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (email: string, password: string, confirmPassword: string, firstName: string, lastName: string) => {
    try {
      setLoading(true);

      // Validation
      if (!firstName.trim() || !lastName.trim()) {
        throw new Error("First name and last name are required");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      console.log('📝 Starting registration for:', email);

      // Create Firebase auth user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Update Firebase auth profile
      await updateProfile(firebaseUser, {
        displayName: `${firstName.trim()} ${lastName.trim()}`
      });

      // Create user profile in Firestore
      const userProfile: User = {
        id: firebaseUser.uid,
        email: firebaseUser.email!,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        displayName: `${firstName.trim()} ${lastName.trim()}`,
        createdAt: Date.now(),
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), userProfile);
      console.log('✅ User profile created in Firestore');
      setUser(userProfile);

    } catch (error: any) {
      console.error('❌ Registration error:', error);
      const message = error.code === 'auth/email-already-in-use' ? 'Email already registered' :
        error.code === 'auth/invalid-email' ? 'Invalid email address' :
          error.code === 'auth/weak-password' ? 'Password too weak' :
            error.message || "Registration failed";
      Alert.alert("Registration Error", message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      // setLoading(true);
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    } 
  };

  // Update profile function
  const updateUserProfile = async (updates: Partial<User>) => {
    try {
      if (!user) throw new Error("No user logged in");
      
      console.log('Updating profile:', updates);
      console.log('Current user:', { 
        id: user.id, 
        email: user.email, 
        firstName: user.firstName, 
        lastName: user.lastName 
      });
      
      // Create updated user object with safe fallbacks
      const updatedUser: User = {
        ...user,
        ...updates,
      };
      
      // Update displayName if firstName or lastName provided
      if (updates.firstName !== undefined || updates.lastName !== undefined) {
        const firstName = updates.firstName ?? user.firstName ?? "";
        const lastName = updates.lastName ?? user.lastName ?? "";
        
        if (firstName && lastName) {
          updatedUser.displayName = `${firstName} ${lastName}`;
        } else if (firstName) {
          updatedUser.displayName = firstName;
        } else if (lastName) {
          updatedUser.displayName = lastName;
        } else {
          updatedUser.displayName = user.email || "User";
        }
      }

      console.log('Updated user data:', updatedUser);

      // Update Firestore
      await updateDoc(doc(db, 'users', user.id), updatedUser);
      setUser(updatedUser);
      
      console.log('Profile updated successfully in Firestore');
      return updatedUser;
    } catch (error) {
      console.error('Profile update error:', error);
      const message = error instanceof Error ? error.message : "Profile update failed";
      Alert.alert("Update Error", message);
      throw error;
    }
  };
  
  return {
    user,
    loading,
    login,
    register,
    logout,
    updateProfile: updateUserProfile,
  };
});