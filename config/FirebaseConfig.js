// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pet-adopt-d3274.firebaseapp.com",
  projectId: "pet-adopt-d3274",
  storageBucket: "pet-adopt-d3274.firebasestorage.app",
  messagingSenderId: "482723597875",
  appId: "1:482723597875:web:ea429449ab233f5d949d46",
  measurementId: "G-9ZH22YHKXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
