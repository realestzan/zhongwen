'use client'
import React, { useState } from 'react';
import { DictionaryEntry } from '@/utils/types';

const DictionaryPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<DictionaryEntry[]>([]);

  const handleSearch = async () => {
    const res = await fetch(`/api/stardict?query=${query}`);
    const data: DictionaryEntry[] = await res.json();
    setResults(data);
  };

  return (
    <div>
      <h1>Dictionary Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a word"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
      
      </ul>
    </div>
  );
};

export default DictionaryPage;