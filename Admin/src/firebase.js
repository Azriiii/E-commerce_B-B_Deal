// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-QEIjggjD9EqQVLTd7LYR7EO80p8-8_8",
  authDomain: "mern-234ae.firebaseapp.com",
  projectId: "mern-234ae",
  storageBucket: "mern-234ae.appspot.com",
  messagingSenderId: "131842772105",
  appId: "1:131842772105:web:e8a04f2369846b0bf90a58",
  measurementId: "G-CN6L5W9HCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;