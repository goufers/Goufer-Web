// src/firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmuWCWHg8A7wqfNO3CwzKV2x7q81NZ4Mg",
  authDomain: "gofer-web-apps.firebaseapp.com",
  projectId: "gofer-web-apps",
  storageBucket: "gofer-web-apps.appspot.com",
  messagingSenderId: "889787438500",
  appId: "1:889787438500:web:b7593057c59491a079dd31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
