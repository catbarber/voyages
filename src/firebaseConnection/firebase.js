import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3BwdwyuoIgvBjQcPtlYCA_ZrmvJl8UO8",
  authDomain: "voyagesofvictora.firebaseapp.com",
  projectId: "voyagesofvictora",
  storageBucket: "voyagesofvictora.firebasestorage.app",
  messagingSenderId: "721648559676",
  appId: "1:721648559676:web:7544daf31df1c133018539",
  measurementId: "G-25CSHVJXK0",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// connectFirestoreEmulator(firestore, "localhost", 8080);
export const googleAuthProvider = new GoogleAuthProvider();
export default firestore;
