// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVw0OoLZ6ZobT1cWzXgxYT6DNFnOEnTxg",
  authDomain: "yarn-calculator-d3a3b.firebaseapp.com",
  projectId: "yarn-calculator-d3a3b",
  storageBucket: "yarn-calculator-d3a3b.firebasestorage.app",
  messagingSenderId: "281501490292",
  appId: "1:281501490292:web:da54221bcd0c7b5c234521",
  measurementId: "G-LBPVZL9HYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);