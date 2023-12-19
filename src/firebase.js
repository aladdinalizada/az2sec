import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsv-mSoq9DO7RRjRj_HsjFK9RDxmycYoU",
  authDomain: "az2sec.firebaseapp.com",
  projectId: "az2sec",
  storageBucket: "az2sec.appspot.com",
  messagingSenderId: "76215782525",
  appId: "1:76215782525:web:3de32b15738571a3b3b514",
  measurementId: "G-6G205MEBG6",
};
// init firebase
firebase.initializeApp(firebaseConfig);
// init firestore service
const db = getFirestore();

export { db };
