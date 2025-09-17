import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";

export async function setSecureItem(key: string, value: string) {
  if (Platform.OS === "web") {
    try { window.localStorage.setItem(key, value); } catch {}
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

export async function deleteSecureItem(key: string) {
  if (Platform.OS === "web") {
    try { window.localStorage.removeItem(key); } catch {}
  } else {
    await SecureStore.deleteItemAsync(key);
  }
}
