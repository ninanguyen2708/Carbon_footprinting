import createContextHook from "@nkzw/create-context-hook";
import { useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  updateProfile,
  getIdToken,
  User as FbUser,
} from "firebase/auth";
import { auth } from "../firebase.native"; // relative path = simplest & reliable
import { strongPassword } from "../utils/password";
import { setSecureItem, deleteSecureItem } from "../utils/secureStore";

type User = {
  id: string;
  email: string;
  displayName?: string | null;
  createdAt?: number;
};

// simple demo second factor (6-digit code)
type PendingMfa = { code: string; expiresAt: number } | null;
const makeCode = () => Math.floor(100000 + Math.random() * 900000).toString();

let failCount = 0;
let lockedUntil = 0;

export const [AuthProvider, useAuth] = createContextHook(() => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  const [pendingMfa, setPendingMfa] = useState<PendingMfa>(null);
  const isMfaRequired = !!pendingMfa;

  const fbToUser = (fb: FbUser): User => ({
    id: fb.uid,
    email: fb.email || "",
    displayName: fb.displayName,
    createdAt: Date.now(),
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        const token = await getIdToken(fbUser, true);
        await setSecureItem("fb_id_token", token); // secure on native, localStorage on web
        setUser(fbToUser(fbUser));
      } else {
        await deleteSecureItem("fb_id_token");
        setUser(null);
      }
      setLoading(false);
      setInitialized(true);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!initialized) return;
    if (user && !isMfaRequired) router.replace("/(tabs)");
    else if (!loading) router.replace("/(auth)/login");
  }, [user, loading, initialized, isMfaRequired]);

  const register = async (email: string, password: string) => {
  setLoading(true);
  try {
    if (!strongPassword(password)) {
      throw new Error("Use 12+ chars incl. upper, lower, number, and symbol.");
    }
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(cred.user);

    // ✅ Immediately sign out so they must verify before logging in
    await signOut(auth);

    Alert.alert(
      "Verify your email",
      "We sent a verification link to your inbox. Please verify, then come back and Sign In."
    );
  } catch (e: any) {
    Alert.alert("Registration Error", e?.message ?? "Registration failed");
    throw e;
  } finally {
    setLoading(false);
  }
};


  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const now = Date.now();
      if (now < lockedUntil) {
        const wait = Math.ceil((lockedUntil - now) / 1000);
        throw new Error(`Too many attempts. Try again in ${wait}s.`);
      }
      const cred = await signInWithEmailAndPassword(auth, email, password);
      if (!cred.user.emailVerified) {
        await signOut(auth);
        throw new Error("Please verify your email before signing in.");
      }

      // second-step (MFA-like) code
      const code = makeCode();
      console.log(`[MFA] 6-digit code for ${email}: ${code} (valid 5m)`);
      setPendingMfa({ code, expiresAt: Date.now() + 5 * 60 * 1000 });

      failCount = 0;
      const token = await getIdToken(cred.user, true);
      await setSecureItem("fb_id_token", token);
    } catch (e: any) {
      failCount += 1;
      if (failCount >= 5) { lockedUntil = Date.now() + 60_000; failCount = 0; }
      Alert.alert("Login Error", e?.message ?? "Login failed");
      throw e;
    } finally { setLoading(false); }
  };

  const verifyMfa = async (input: string) => {
    if (!pendingMfa) throw new Error("No MFA challenge in progress.");
    if (Date.now() > pendingMfa.expiresAt) {
      setPendingMfa(null);
      throw new Error("MFA code expired. Please log in again.");
    }
    if (input.trim() !== pendingMfa.code) {
      throw new Error("Invalid code.");
    }
    setPendingMfa(null);
  };

  const resendMfa = async () => {
    const code = makeCode();
    console.log(`[MFA] New 6-digit code: ${code} (valid 5m)`);
    setPendingMfa({ code, expiresAt: Date.now() + 5 * 60 * 1000 });
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      await deleteSecureItem("fb_id_token");
      setPendingMfa(null);
    } finally { setLoading(false); }
  };

  const updateProfileSafe = async (updates: Partial<User>) => {
    if (!auth.currentUser) throw new Error("No user logged in");
    if (typeof updates.displayName === "string") {
      await updateProfile(auth.currentUser, { displayName: updates.displayName });
    }
    setUser((u) => (u ? { ...u, ...updates } : u));
    return { ...user, ...updates };
  };

  return useMemo(() => ({
    user,
    loading,
    login,
    register,
    logout,
    updateProfile: updateProfileSafe,
    isMfaRequired,
    verifyMfa,
    resendMfa,
  }), [user, loading, isMfaRequired]);
});
