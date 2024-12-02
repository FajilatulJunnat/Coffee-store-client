// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Q3Q1TeTTQkE0aKR1UU5cwjkLCWlyUz0",
  authDomain: "coffee-store-ebf8b.firebaseapp.com",
  projectId: "coffee-store-ebf8b",
  storageBucket: "coffee-store-ebf8b.firebasestorage.app",
  messagingSenderId: "14362650338",
  appId: "1:14362650338:web:cb261fe901607de2e660bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;