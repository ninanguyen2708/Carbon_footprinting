import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert } from "react-native";
import { Link } from "expo-router";
import { Leaf } from "lucide-react-native";
import Input from "@/components/Input";
import Button from "@/components/Button";
import colors from "../../constants/colors";
import { useAuth } from "../../providers/AuthProvider";

const strongEmail = (e: string) => /\S+@\S+\.\S+/.test(e);

export default function LoginScreen() {
  const { login, loading, isMfaRequired, verifyMfa, resendMfa } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mfa, setMfa] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string; mfa?: string }>({});

  const validateLoginForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!strongEmail(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateLoginForm()) return;
    try { await login(email, password); }
    catch { /* provider shows alert */ }
  };

  const handleVerifyMfa = async () => {
    if (!mfa || mfa.trim().length !== 6) {
      setErrors((e) => ({ ...e, mfa: "Enter the 6-digit code" }));
      return;
    }
    try {
      await verifyMfa(mfa.trim());
      setMfa("");
      Alert.alert("Success", "Verification complete.");
    } catch (e: any) {
      setErrors((x) => ({ ...x, mfa: e?.message ?? "Invalid code" }));
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined} keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container} testID="login-screen">
          <View style={styles.logoContainer}>
            <View style={styles.logoBackground}>
              <Leaf size={40} color={colors.primary} strokeWidth={2} />
            </View>
            <Text style={styles.logoText}>CarbonTrack</Text>
            <Text style={styles.tagline}>Track your carbon footprint</Text>
          </View>

          <View style={styles.formContainer}>
            {!isMfaRequired ? (
              <>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subtitle}>Sign in to your account</Text>

                <Input label="Email" placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" error={errors.email} testID="email-input" />

                <Input label="Password" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry error={errors.password} testID="password-input" />

                <Button title="Sign In" onPress={handleLogin} loading={loading} style={styles.button} testID="login-button" />

                <View style={styles.footer}>
                  <Text style={styles.footerText}>Don&apos;t have an account? </Text>
                  <Link href="/(auth)/register" asChild>
                    <TouchableOpacity><Text style={styles.footerLink}>Sign Up</Text></TouchableOpacity>
                  </Link>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.title}>Two-Step Verification</Text>
                <Text style={styles.subtitle}>Enter the 6-digit code shown in the console.</Text>

                <Input label="Verification code" placeholder="123456" value={mfa} onChangeText={setMfa} keyboardType="number-pad" autoCapitalize="none" error={errors.mfa} />

                <Button title="Verify Code" onPress={handleVerifyMfa} loading={loading} style={styles.button} />
                <TouchableOpacity onPress={resendMfa} style={{ marginTop: 12, alignSelf: "center" }}>
                  <Text style={{ color: colors.primary, fontWeight: "600" }}>Resend code</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: { flexGrow: 1 },
  container: { flex: 1, backgroundColor: colors.background, padding: 24 },
  logoContainer: { alignItems: "center", marginTop: 60, marginBottom: 40 },
  logoBackground: { width: 80, height: 80, borderRadius: 40, backgroundColor: "#E8F5E9", alignItems: "center", justifyContent: "center", marginBottom: 16 },
  logoText: { fontSize: 28, fontWeight: "700", color: colors.primary, marginBottom: 8 },
  tagline: { fontSize: 16, color: "#666" },
  formContainer: { backgroundColor: "#FFFFFF", borderRadius: 16, padding: 24, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 },
  title: { fontSize: 24, fontWeight: "700", color: colors.text, marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 24 },
  button: { marginTop: 16 },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 24 },
  footerText: { fontSize: 14, color: "#666" },
  footerLink: { fontSize: 14, fontWeight: "600", color: colors.primary },
});
