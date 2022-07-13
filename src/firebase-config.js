// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANIiiPTrTXESc0k-vN8xPUa1c8ciDuVqc",
  authDomain: "auth-development-f2e55.firebaseapp.com",
  projectId: "auth-development-f2e55",
  storageBucket: "auth-development-f2e55.appspot.com",
  messagingSenderId: "618278781345",
  appId: "1:618278781345:web:0607b1fe14899884d00be0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
