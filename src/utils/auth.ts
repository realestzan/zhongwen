import { auth } from "@/lib/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut } from "firebase/auth";
import { dbSetUser } from "./db";
import { User } from "./types";


// Function to sign in with Google
const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;
      const user = {
        uid: firebaseUser.uid,
        displayName: firebaseUser.displayName,
        email: firebaseUser.email,
        photoURL: firebaseUser.photoURL,
        createdAt: new Date()
      };
      console.log("User signed in: ", user);
      await dbSetUser(user as User);
      return user;
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      throw error;
    }
  };
// Function to sign out
const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error;
  }
};

export { signInWithGoogle as authSignInWithGoogle, signOut as authSignOut };