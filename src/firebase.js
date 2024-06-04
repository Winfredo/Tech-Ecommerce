// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy-Bk7EFH1ChcX_7t09PkKVE7Bg_t_C0s",
  authDomain: "tech-commerce-337ef.firebaseapp.com",
  projectId: "tech-commerce-337ef",
  storageBucket: "tech-commerce-337ef.appspot.com",
  messagingSenderId: "250200981389",
  appId: "1:250200981389:web:ec3f88652ffdf18ad047c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app