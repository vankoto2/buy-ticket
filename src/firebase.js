// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuKxCVFZ8aoZ5fkXIp6rPtD85NSjtsSMs",
  authDomain: "buy-ticket-7b91d.firebaseapp.com",
  projectId: "buy-ticket-7b91d",
  storageBucket: "buy-ticket-7b91d.appspot.com",
  messagingSenderId: "234944748293",
  appId: "1:234944748293:web:37471ff8185ec269dd356c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);