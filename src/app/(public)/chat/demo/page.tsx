// app/page.tsx

'use client';

import { useEffect, useState, useTransition } from 'react';
import { actAsDictionary } from './utils';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function HomePage() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const data = await actAsDictionary(prompt);
        setResponse(data);
      } catch (error) {
        setResponse('An error occurred while fetching the response.');
      }
    });
  };

  useEffect(() => {
    async function getLoader() {
      const { grid } = await import('ldrs')
      grid.register()
    }
    getLoader()
  }, [])



  return (
    <div className='max-w-6xl mx-auto py-36'>
      <h1>Chat with ChatGPT</h1>
      
      <form onSubmit={handleSubmit}>
        <textarea
          rows={4}
          cols={50}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your prompt here..."
          className='outline-none bg-transparent mt-4'
          required
        />
        <br />
        <button type="submit" disabled={isPending}>
          {isPending ?
          <div>
          <l-grid size="300" color="white"></l-grid>
                    </div>
                     : 'Send'}
        </button>
      </form>
      {response && (
        <div style={{ marginTop: '2rem' }}>
          <h2 >Response:</h2>
          <p className='font-thin text-2xl my-4'>{response}</p>
          <Markdown remarkPlugins={[remarkGfm]}>{`${response}`}</Markdown>
          
        </div>
      )}
      {/* <l-grid size="100" color="white"></l-grid> */}
    </div>
  );
}
