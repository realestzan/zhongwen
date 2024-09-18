export interface WordExample { 
    example: string;
    translation: string;
    pinyin: string;
}

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
    radicals: [Radical];
    components: string;
    hsk: number;
    examples: [WordExample]
}

export interface DictionaryEntry {
    traditional: string;
    simplified: string;
    pinyin: string;
    definitions: string[];
  }


  export interface Talk {
    simplified: string;
    pinyin: string;
    translation: string;
  }


  // Define the Message type
export interface Message {
    role: 'system' | 'user' | 'assistant';
    content: string;
  }
  
  