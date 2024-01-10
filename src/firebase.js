import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import toast from "react-hot-toast";
// Your web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();
export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};
export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logout = async () => {
  try {
    const res = await signOut(auth);
    return res;
  } catch (error) {
    toast.error(error.message);
  }
};
export default app;
export { db };
