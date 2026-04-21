// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk-6HXfzaHA5ekPnO1cuaO16tRgOsPib0",
  authDomain: "careerlink-bf84f.firebaseapp.com",
  projectId: "careerlink-bf84f",
  storageBucket: "careerlink-bf84f.firebasestorage.app",
  messagingSenderId: "1074825564187",
  appId: "1:1074825564187:web:e9d41dcac9d2edadf028be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}