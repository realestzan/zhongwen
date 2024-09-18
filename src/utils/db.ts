import { db } from "@/lib/firebase";
import { getFirestore, doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";
import { Chat, Message, User } from "./types";

// Function to save user info to Firestore
export const dbSetUser = async (user: User) => {
  try {
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      createdAt: new Date()
    });
    console.log("User info saved to Firestore");
  } catch (error) {
    console.error("Error saving user info to Firestore: ", error);
    throw error;
  }
};




export const dbSetChat = async (messages: Message[]): Promise<void> => {
  const newChatRef = doc(collection(db, "chats")); // Generate a new doc reference
  const chatId = newChatRef.id;

  try {
    await setDoc(newChatRef, {  // Use newChatRef here
      uid: chatId,
      title: new Date().toISOString(),
      messages,
      createdAt: new Date()
    });
    console.log("Chat info saved to Firestore");
  } catch (error) {
    console.error("Error saving chat info to Firestore: ", error);
    throw error;
  }
};

export const dbGetChats = async (): Promise<Chat[]> => {
  try {
    const chatsCollectionRef = collection(db, "chats"); // Reference to the "chats" collection
    const querySnapshot = await getDocs(chatsCollectionRef); // Get all documents in the collection
    const chats: Chat[] = [];

    querySnapshot.forEach((doc) => {
      chats.push(doc.data() as Chat); // Push each document's data as Chat type
    });

    console.log("Chats fetched successfully:", chats);
    return chats;
  } catch (error) {
    console.error("Error fetching chats from Firestore:", error);
    throw error;
  }
};

export const dbGetChat = async (id: string): Promise<Chat | null> => {
  try {
    const chatDocRef = doc(db, "chats", id); // Reference to the specific chat document by ID
    const chatDoc = await getDoc(chatDocRef); // Get the document

    if (chatDoc.exists()) {
      const chatData = chatDoc.data() as Chat; // Cast document data to Chat type
      console.log("Chat fetched successfully:", chatData);
      return chatData;
    } else {
      console.log("No such chat with ID:", id);
      return null;
    }
  } catch (error) {
    console.error("Error fetching chat by ID from Firestore:", error);
    throw error;
  }
};