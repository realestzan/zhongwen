import { auth } from "@/lib/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut, deleteUser, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { dbDeleteUser, dbSetUser } from "./db";
import { User } from "./types";


// Function to sign in with Google
export const authSignInWithGoogle = async () => {
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
export const authSignOut = async () => {
  try {
    await firebaseSignOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error;
  }
};

export const authDeleteUser = async (): Promise<void> => {
  try {
    const user = auth.currentUser;
    if (user) {
      try {
        await dbDeleteUser(user.uid);
        await deleteUser(user);
        console.log("User deleted successfully");
      } catch (error: unknown) {
        if ((error as { code: string }).code === 'auth/requires-recent-login') {
          // Prompt the user to re-authenticate
          const credential = EmailAuthProvider.credential(user.email!, 'password');
          await reauthenticateWithCredential(user, credential);
          // Retry deletion
          await dbDeleteUser(user.uid);
          await deleteUser(user);
          console.log("User re-authenticated and deleted successfully");
        } else {
          throw error;
        }
      }
    } else {
      console.log("No user is currently signed in");
    }
  } catch (error) {
    console.error("Error deleting user: ", error);
    throw error;
  }
};