// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2OszluU-8WZ-dLTKklFZZM5nSuXBqOz0",
  authDomain: "coffee-store-b20e9.firebaseapp.com",
  projectId: "coffee-store-b20e9",
  storageBucket: "coffee-store-b20e9.firebasestorage.app",
  messagingSenderId: "874633549655",
  appId: "1:874633549655:web:a7940e9ad0c7e63c5fd012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);