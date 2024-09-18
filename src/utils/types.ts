

export interface Radical { 
  radical: string;
  meaning: string;
  strokes: number;
  pinyin: string;
}

export interface Word { 
  word: string;
  definition: string;
  pinyin: string;
  examples: [WordExample]
}
export interface WordExample { 
  example: string;
  translation: string;
  pinyin: string;
}
export interface DictionaryEntry {
  traditional: string;
  simplified: string;
  pinyin: string;
  definitions: string[];
}

export interface Chat {
  uid: string;
  title: string;
  messages: Message[]
  createdAt: Date;
}

export interface Message {
  role: 'system' | 'user' | 'assistant',
  content: string;
}

export interface User {
  uid: string
  displayName: string;
  email: string;
  photoURL: string;
  createdAt: Date;
}

export interface Notebook {
  uid: string;
  title: string;
  words: Word[];
  createdAt: Date;
  updatedAt: Date;
}