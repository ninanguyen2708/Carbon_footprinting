import createContextHook from "@nkzw/create-context-hook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { User } from "@/types";

// Mock authentication for demo purposes
// In a real app, this would connect to Firebase Auth or similar service

export const [AuthProvider, useAuth] = createContextHook(() => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [initialized, setInitialized] = useState<boolean>(false);

  // Load user from storage on app start
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error("Failed to load user:", error);
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    loadUser();
  }, []);

  // Redirect based on auth state
  useEffect(() => {
    if (!initialized) return;

    if (user) {
      router.replace("/(tabs)");
    } else if (!loading) {
      router.replace("/(auth)/login");
    }
  }, [user, loading, initialized]);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      
      // In a real app, this would validate credentials with a server
      if (email.trim() === "" || password.trim() === "") {
        throw new Error("Email and password are required");
      }
      
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      // Mock successful login
      const mockUser: User = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        email,
        displayName: email.split("@")[0],
        university: "Example University",
        createdAt: Date.now(),
      };

      await AsyncStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
      
      return mockUser;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Login failed";
      Alert.alert("Login Error", message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, password: string, confirmPassword: string) => {
    try {
      setLoading(true);
      
      // Basic validation
      if (email.trim() === "" || password.trim() === "") {
        throw new Error("Email and password are required");
      }
      
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }
      
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      // Mock successful registration
      const mockUser: User = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        email,
        displayName: email.split("@")[0],
        createdAt: Date.now(),
      };

      await AsyncStorage.setItem("user", JSON.stringify(mockUser));
      setUser(mockUser);
      
      return mockUser;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Registration failed";
      Alert.alert("Registration Error", message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await AsyncStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    try {
      if (!user) throw new Error("No user logged in");
      
      const updatedUser = { ...user, ...updates };
      await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      return updatedUser;
    } catch (error) {
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
    updateProfile,
  };
});