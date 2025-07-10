// src/app/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBsd4XBxyXL6z0gXDJgq1San8CSU5QPXyc",
  authDomain: "employee-system-firestore.firebaseapp.com",
  projectId: "employee-system-firestore",
  storageBucket: "employee-system-firestore.appspot.com", 
  messagingSenderId: "129180367816",
  appId: "1:129180367816:web:969d68b863b8d502825efd"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
