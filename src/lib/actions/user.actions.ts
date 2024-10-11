
// user.action.ts


import { auth, db } from "../../../firebase.config"; // Adjust the path accordingly
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Sign up a new user
export async function signUpUser(email: string, password: string, confirmPassword: string | undefined) {
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match");
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store additional user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: new Date(),
    });

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// Sign in an existing user
export async function signInUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Retrieve user data from Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      throw new Error("User does not exist in the database");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}


