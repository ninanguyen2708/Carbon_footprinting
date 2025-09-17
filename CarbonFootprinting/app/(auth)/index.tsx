// app/(auth)/index.tsx
import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import colors from "@/constants/colors";               // safe: your existing colors
import { useAuth } from "@/providers/AuthProvider";    // or: "../../providers/AuthProvider"
import { router } from "expo-router";

export default function AuthIndex() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace("/(tabs)");
      } else {
        router.replace("/(auth)/login");
      }
    }
  }, [user, loading]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
