import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmFctAuCin6hW-sK3mbqNxpchZdABqOFg",
  authDomain: "instafame-junction.firebaseapp.com",
  projectId: "instafame-junction",
  storageBucket: "instafame-junction.appspot.com",
  messagingSenderId: "25987108977",
  appId: "1:25987108977:web:34f48162da7eadf7700bd0",
  measurementId: "G-K2RRVSRBL0"
};

// Initialize Firebase
const index = initializeApp(firebaseConfig);
export const auth = getAuth(index);