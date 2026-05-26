// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARYUbGdyacdKS8DCT36Tw2WKWWIuQkTG8",
  authDomain: "dragon-news-7042a.firebaseapp.com",
  projectId: "dragon-news-7042a",
  storageBucket: "dragon-news-7042a.firebasestorage.app",
  messagingSenderId: "339153478743",
  appId: "1:339153478743:web:ec965686e7a0bcb0abaf12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app