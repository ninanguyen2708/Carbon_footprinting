import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCfXcsyspIHy115XVnmDtZ6oSXuKv3RIo",
  authDomain: "ecostudent-tracker-bfa1f.firebaseapp.com",
  projectId: "ecostudent-tracker-bfa1f",
  storageBucket: "ecostudent-tracker-bfa1f.firebasestorage.app",
  messagingSenderId: "18851326152",
  appId: "1:18851326152:web:a7fab91a021a546348ddfd"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

export { app, auth };
