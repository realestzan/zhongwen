'use client'
import React, { useState } from 'react';
import { Message, Talk } from '@/utils/types';
import { motion } from 'framer-motion';
import ChatSide from './chat-list';
import { fetchAITalk } from '@/utils/prompt';

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: `Act as a Chinese Speaker, and talk to me in Chinese based on the topic provided below, so I can practice listening and understanding Chinese.
      I want you response in this format:
      <aside>
        Simplifed Chinese<br/>
        Pinyin<br/>
        English Translation<br/>

      you should separate subline with "<br/>". it it's a new line, it start with <aside> (don't close it with <aside/>)
      so I can process it later

      You should be friendly and hospital, you should ask me questions actively
      ` }
  ]);
  const [input, setInput] = useState('你好');
  const [talk, setTalk] = useState<Talk | null>(null);

  const sendMessage = async () => {
    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: input },
    ];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetchAITalk(newMessages);
      setMessages([...newMessages, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("Error fetching AI translation:", error);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const [isSide, setIsSide] = useState(false)
  return (
    <div className="max-w-5xl mx-auto lg:py-36">

      <ChatSide open={isSide} setOpen={setIsSide} />
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={`message 
          ${msg.role == 'system' && 'hidden'} 
          ${msg.role == 'user' && 'font-medium text-3xl'} 
          ${msg.role == 'assistant' && ''} 
          py-2 text-2xl max-md:text-xl border-b-2`}>
            {msg.content.split('<aside>').map((line, lineIndex) => (
              <motion.div
              key={lineIndex}
              initial={{ x: -100, opacity: 0}}
              animate={{ x: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
             >
              <h1 key={lineIndex} className='my-8 max-md:my-4'>
              <aside className='flex justify-between items-center group'>
                
                <div>
                {
                line.split('<br/>').map((subline, sublineIndex) => (
                  <h2 key={sublineIndex} className={
                    ` my-4
                      ${(sublineIndex == 0 && msg.role == 'assistant') && 'text-ai'}
                      ${sublineIndex == 1 && 'font-normal'}
                      ${sublineIndex == 2 && 'font-thin'}
                    `
                  }>{subline}</h2>
                ))
              }
              </div>
                  <div className="lucide lucide-arrow-right opacity-0 ml-auto size-6 -tranzinc-x-6 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
                  </aside>
              </h1>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      
      <section className='flex gap-16'>
      <input
        type="text"
        value={input}
        className='outline-none border-b-2 bg-transparent w-full text-6xl max-md:text-2xl max-md:placeholder:text-xl placeholder:text-2xl transition py-8'
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
      />
      <button className='text-2xl max-md:text-xl cursor-pointer' onClick={sendMessage}>Send</button>
      <button className='text-2xl max-md:text-xl cursor-pointer' onClick={() => setIsSide(prev => !prev)}>Chats</button>
      </section>
    </div>
  );
}