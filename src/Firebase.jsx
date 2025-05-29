// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmxei44D2D6P6h1xQBKpVXaCrxkurPIfE",
  authDomain: "e-commerce-d5c16.firebaseapp.com",
  projectId: "e-commerce-d5c16",
  storageBucket: "e-commerce-d5c16.firebasestorage.app",
  messagingSenderId: "109696466354",
  appId: "1:109696466354:web:0e96918f2937609229f8ab",
  measurementId: "G-Z93WRP73NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);