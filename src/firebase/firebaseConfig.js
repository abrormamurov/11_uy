import { initializeApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcqAT7f-hjSuZtwC8vmbpEJgm0xljUQFQ",
  authDomain: "mymarket-3f465.firebaseapp.com",
  projectId: "mymarket-3f465",
  storageBucket: "mymarket-3f465.appspot.com",
  messagingSenderId: "546313030491",
  appId: "1:546313030491:web:ebde2324093d378570a87e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = Firestore(app);

export const auth = getAuth(app);
