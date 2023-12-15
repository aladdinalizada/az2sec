// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsv-mSoq9DO7RRjRj_HsjFK9RDxmycYoU",
  authDomain: "az2sec.firebaseapp.com",
  projectId: "az2sec",
  storageBucket: "az2sec.appspot.com",
  messagingSenderId: "76215782525",
  appId: "1:76215782525:web:3de32b15738571a3b3b514",
  measurementId: "G-6G205MEBG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
