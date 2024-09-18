'use client';

// context/AppContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { auth } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "@/utils/types";

// Define the AppContextProps interface properly
interface AppContextProps {
  user: User | null; // Type user as User or null
}

// Create the context with a default value of `undefined`
const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null); // Initialize with null
  const router = useRouter();
  const pathname = usePathname();

  // Listen to the Firebase auth state and set the user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser as User | null); // Cast firebaseUser to User or null
    });
    return () => unsubscribe();
  }, []);

  // Redirect logic if the user is not authenticated
  useEffect(() => {
    if (!user && (pathname === "/learner" || pathname === "/instructor")) {
      router.push("/"); // Redirect to the home page or another page
    }
  }, [user, router, pathname]);

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
