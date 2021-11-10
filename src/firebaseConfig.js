// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9yin60AqSA3VAytmuk02w3mpkqRJdlZY",
  authDomain: "blog-f28e9.firebaseapp.com",
  projectId: "blog-f28e9",
  storageBucket: "blog-f28e9.appspot.com",
  messagingSenderId: "750268102534",
  appId: "1:750268102534:web:dfcf998989f4d76c091e07"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);