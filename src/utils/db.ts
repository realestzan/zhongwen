import { db } from "@/lib/firebase";
import { getFirestore, doc, setDoc, collection, getDocs, getDoc, deleteDoc, addDoc } from "firebase/firestore";
import { Chat, DictionaryEntry, Message, User, Word } from "./types";

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

export const dbDeleteUser = async (id: string): Promise<void> => {
  try {
    const userDocRef = doc(db, "users", id); // Reference to the specific user document by ID
    await deleteDoc(userDocRef); // Delete the document
    console.log("User deleted successfully with ID:", id);
  } catch (error) {
    console.error("Error deleting user by ID from Firestore:", error);
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

export const dbDeleteChat = async (id: string): Promise<void> => {
  try {
    const chatDocRef = doc(db, "chats", id); // Reference to the specific chat document by ID
    await deleteDoc(chatDocRef); // Delete the document
    console.log("Chat deleted successfully with ID:", id);
  } catch (error) {
    console.error("Error deleting chat by ID from Firestore:", error);
    throw error;
  }
};

export const handleCedictSearch = async (word : string) => {
  const res = await fetch(`/api/dictionary/cedict?query=${word}`);
  const data: DictionaryEntry[] = await res.json();
  return data;
};

export const dbSetWord = async (selectedWord: string): Promise<void> => {
  try {
    const cedict = await handleCedictSearch(selectedWord); // Await the result of handleCedictSearch

    const examples = [{}]
    cedict.slice(0, 5).map(example => {
      examples.push(example);
  });

    const word = { 
      word: cedict[0].simplified,
      definition: cedict[0].definitions[0],
      pinyin: cedict[0].pinyin,
      examples: [],
    }

    const wordsCollectionRef = collection(db, "words"); // Reference to the "words" collection
    await addDoc(wordsCollectionRef, word); // Add the new word document
    console.log("Word added successfully:", word);
  } catch (error) {
    console.error("Error adding word to Firestore:", error);
    throw error;
  }
};

export const dbDeleteWord = async (id: string): Promise<void> => {
  try {
    const wordDocRef = doc(db, "words", id); // Reference to the specific word document by ID
    await deleteDoc(wordDocRef); // Delete the document
    console.log("Word deleted successfully with ID:", id);
  } catch (error) {
    console.error("Error deleting word by ID from Firestore:", error);
    throw error;
  }
};

export const dbGetWords = async (): Promise<Word[]> => {
  try {
    const wordsCollectionRef = collection(db, "words"); // Reference to the "words" collection
    const querySnapshot = await getDocs(wordsCollectionRef); // Fetch all documents in the collection
    const words: Word[] = querySnapshot.docs.map(doc => doc.data() as Word); // Map documents to Word objects
    console.log("Words fetched successfully:", words);
    return words;
  } catch (error) {
    console.error("Error fetching words from Firestore:", error);
    throw error;
  }
};