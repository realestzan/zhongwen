// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9S9DFfpIgH01tfF8TZX4daEyFnS7LOmA",
  authDomain: "realest-zhongwen.firebaseapp.com",
  projectId: "realest-zhongwen",
  storageBucket: "realest-zhongwen.appspot.com",
  messagingSenderId: "543721935258",
  appId: "1:543721935258:web:2829185d46e094c9bd6a23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { db, auth };