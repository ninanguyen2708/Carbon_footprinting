// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyeUCYnqeBk6hZslwCp9_rufuwHwLtU38",
  authDomain: "carbonfootprint-394c3.firebaseapp.com",
  projectId: "carbonfootprint-394c3",
  storageBucket: "carbonfootprint-394c3.firebasestorage.app",
  messagingSenderId: "263219211973",
  appId: "1:263219211973:web:dd5684cf3caf24620f8aac",
  measurementId: "G-VF5CC5BYD7"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const db = getFirestore(app);
// export const auth = getAuth(app);

// export default app;

// let app, auth, db;

// if (typeof window !== "undefined") {
//   app = initializeApp(firebaseConfig);
//   auth = getAuth(app);
//   db = getFirestore(app);
// }

// export { auth, db };
// export default app;

let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Auth - simple approach that works with Expo
export const auth = getAuth(app);

// Initialize Firestore  
export const db = getFirestore(app);

console.log('Firebase initialized:', {
  auth: !!auth,
  db: !!db,
  environment: typeof window !== 'undefined' ? 'web' : 'native'
});

export default app;