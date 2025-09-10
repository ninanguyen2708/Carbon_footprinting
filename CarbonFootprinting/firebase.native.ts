import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBCfXcsyspIHy115XVnmDtZ6oSXuKv3RIo",
  authDomain: "ecostudent-tracker-bfa1f.firebaseapp.com",
  projectId: "ecostudent-tracker-bfa1f",
  storageBucket: "ecostudent-tracker-bfa1f.firebasestorage.app",
  messagingSenderId: "18851326152",
  appId: "1:18851326152:web:a7fab91a021a546348ddfd"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { app, auth };
