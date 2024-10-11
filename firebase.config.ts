import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'; // If using Firestore

const firebaseConfig = {
    apiKey: "AIzaSyBgPTLQbb3Buwh_DViEYsOWsiM14hGQFXs",
    authDomain: "via-app-17967.firebaseapp.com",
    projectId: "via-app-17967",
    storageBucket: "via-app-17967.appspot.com",
    messagingSenderId: "254942959515",
    appId: "1:254942959515:web:c36a73b9f735f484ac333e",
    measurementId: "G-EF567M6189"
  }

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 