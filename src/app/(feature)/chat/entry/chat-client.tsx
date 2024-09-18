'use client';
export const dynamic = 'force-dynamic';

import React, { useEffect, useRef, useState } from 'react';
import { Chat, Message } from '@/utils/types';
import { motion, useInView } from 'framer-motion';
import ChatSide from './chat-side'; // Ensure this component is correctly implemented
import { aiChatGroq, aiChatGpt } from '@/utils/prompt'; // Ensure these functions are correctly implemented
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import AnimatedSection from '@/components/animate/section';
import { dbGetChat, dbSetChat } from '@/utils/db';
import { useSearchParams } from 'next/navigation';


export default function PageChat({ id }: {id: string}) {
  const models = [
    {
      value: "gpt",
      label: "GPT 3.5 turbo",
    },
    {
      value: "gpt",
      label: "GPT 4o",
    },
    {
      value: "groq",
      label: "Groq LLM",
    },
    {
      value: "claude",
      label: "Claude 3.5 Sonnet",
    },
  ]

  const systemMessage : Message =  { role: "system", content: `
    Act as a Chinese Speaker, and talk to me in Chinese based on the topic provided below, so I can practice listening and understanding Chinese.
    I want you response in this format (You must always go with this format, and nothing additional format): 
    <aside>
      Simplifed Chinese<br/>
      Pinyin<br/>
      English Translation<br/>

    you should separate subline with "<br/>". it it's a new line, it start with <aside> (don't close it with <aside/>)
    so I can process it later

    You should be friendly and hospital, you should ask me questions actively
    ` }
  const [formStatus, setFormStatus] = useState<1 | 2 | 3 | 4>(1);
  const [messages, setMessages] = useState<Message[]>([systemMessage]);
  const [chat, setChat] = useState<Chat | undefined>();
  const [input, setInput] = useState('你好');
  const [displayResponse, setDisplayResponse] = useState<string>('');
  const [typing, setTyping] = useState<boolean>(false);
  const [isSide, setIsSide] = useState(false);
  const [model, setModel] = useState<string>('');
  const [open, setOpen] = React.useState(false)

   
  const onboardingRef = useRef(null);
  const onboardingInView = useInView(onboardingRef, { once: true });

  const handleSend = async () => {
    if (!input.trim()) {
      return;
    }
    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
    setTyping(true);

    try {
      let response;
      if (model === 'gpt') {
        response = await aiChatGpt(newMessages);
        console.log(messages);
        setFormStatus(1)
      } else {
        response = await aiChatGroq(newMessages);
        setFormStatus(1)
      }
      if (response && typeof response !== 'string' && response.messages) {
        const assistantMessage = response.messages[0].content;
        typeText(assistantMessage, newMessages);
      } else {
        console.error('No response received from API');
        setFormStatus(4);
        setTyping(false);
      }
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setFormStatus(4);
      setTyping(false);
    }
  };

  const typeText = (text: string, updatedMessages: Message[]) => {
    setDisplayResponse('');
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayResponse((prev) => prev + text.charAt(i));
      i ++;
      if (i === text.length) {
        clearInterval(intervalId);
        setTyping(false);
        setMessages([...updatedMessages, { role: 'assistant', content: text }]);
        setDisplayResponse('');
      }
    }, 2);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (!input.trim()) {
        return;
      }
      setFormStatus(2);
      handleSend();
      window.scrollTo({ top: document.getElementById('input')?.offsetTop || 0, behavior: 'smooth' });
    }
  };
  
  const handleSave = async () => {
    try {
      await dbSetChat(messages);
      console.log("Chat saved successfully");
    } catch (error) {
      console.error("Error saving chat:", error);
    }
  };


  const searchParams = useSearchParams();
  useEffect(() => {
    const fetchChat = async (chatId: string) => {
      try {
        const response = await dbGetChat(chatId);
        if (response) {
          setChat(response);
          setMessages(response.messages);
        }
        console.log('Chat fetched:', response);
      } catch (error) {
        console.error('Error fetching chat:', error);
      }
    };

    if (id) {
      fetchChat(id);
    } else {
      setChat(undefined);
      setMessages([systemMessage]);
      console.log('ID parameter not found');
    }
  }, [id]);

  return (
    <div className="max-w-5xl mx-auto lg:py-36 min-h-[80vh]">
      <AnimatedSection ref={onboardingRef} isInView={onboardingInView}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-6xl max-md:text-2xl font-medium">{chat ? chat.title : model}</h1>
        
        <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {model
            ? models.find((models) => model === model)?.label
            : "Select model..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search model..." />
          <CommandList>
            <CommandEmpty>No model found.</CommandEmpty>
            <CommandGroup>
              {models.map((model) => (
                <CommandItem
                  key={model.value}
                  value={model.value}
                  onSelect={(currentValue) => {
                    setModel(currentValue === model.value ? "gpt" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      model.value == model.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {model.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    
      </div>

      <ChatSide open={isSide} setOpen={setIsSide} />

      <section className={` ${(model || chat?.title == '') && 'hidden'} py-12`}>
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      <div onClick={() => setModel('gpt')} className="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl shadow-red-500/20 lg:mx-auto rounded-xl bg-foreground/10 hover:scale-95 transition">
        <p className="text-4xl max-sm:text-2xl leading-relaxed font-medium">gpt-3.5-turbo</p>
        <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full"
          src="https://cdn.brandfetch.io/chat.openai.com/icon" />
      </div>
      <div onClick={() => setModel('groq')} className="flex flex-col w-full max-w-lg p-8 text-left shadow-2xl shadow-red-500/20 lg:mx-auto rounded-xl bg-foreground/10 hover:scale-95 transition">
        <p className="text-4xl max-sm:text-2xl leading-relaxed font-medium">llama3-8b-8192</p>
        <img alt="testimonial" className="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full"
          src="https://cdn.brandfetch.io/groq.com/icon" />
      </div>
    </div>
</section>

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
              <h1 key={lineIndex} className={` ${lineIndex == 2 && 'hidden'} my-8 max-md:my-4`}>
              <aside className={`flex justify-between items-center group ${(lineIndex == 0 && msg.role != 'user') && 'hidden'}`}>
                
                <div>
                {
                line.split('<br/>').map((subline, sublineIndex) => (
                  <h2 key={sublineIndex} className={
                    ` my-4
                      ${((sublineIndex % 3 === 0) && msg.role == 'assistant') && 'text-ai mt-8'}
                      ${sublineIndex == 1 && 'font-normal'}
                      ${sublineIndex == 2 && 'font-thin'}
                    `
                  }>{subline.replace('</aside>', '')}</h2>
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
        {typing && (
          <div className="my-2">
            <span className="w-fit text-2xl">
            <motion.div 
            className='w-fti' 
            initial={{ opacity: 0, y: 5, scale: 0.2 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
              {displayResponse}
              </motion.div>
              <span className="blinking-cursor">|</span>
            </span>
          </div>
        )}
      </div>
      {/* {formStatus === 2 && (
        <div className="mt-20 mx-auto overflow-hidden">
          <div className="flex items-center text-5xl max-md:text-2xl gap-8 justify-between">
            Thinking...
            <div className="loader"></div>
          </div>
        </div>
      )} */}
       {formStatus == 2 &&
          <div className='mt-20 mx-auto overflow-hidden'>
             <span className="dark:hidden flex items-center text-5xl max-md:text-2xl gap-8 justify-between">Thinking<l-mirage size="500" color="black"></l-mirage></span>
             <span className="hidden dark:flex items-center text-5xl max-md:text-2xl gap-8 justify-between">Thinking<l-mirage size="500" color="white"></l-mirage></span>
          </div>
        }
      <section className="flex gap-16 max-sm:flex-col">
        <input
          id="input"
          type="text"
          value={input}
          className="outline-none border-b-2 bg-transparent w-full text-6xl max-md:text-2xl max-md:placeholder:text-xl placeholder:text-2xl transition py-8"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        />
        <aside className="flex gap-8">
        <button className='text-2xl max-md:text-xl cursor-pointer' onClick={handleSave}>Save</button>
        <button className='text-2xl max-md:text-xl cursor-pointer' onClick={handleSend}>Send</button>
        <button className='text-2xl max-md:text-xl cursor-pointer' onClick={() => setIsSide(prev => !prev)}>Chats</button>

        </aside>
      </section>

      {/* CSS for the blinking cursor and loader */}
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from,
          to {
            color: transparent;
          }
          50% {
            color: black;
          }
        }
        .loader {
          border: 4px solid #f3f3f3; /* Light grey */
          border-top: 4px solid #3498db; /* Blue */
          border-radius: 50%;
          width: 30px;
          height: 80px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      </AnimatedSection>
    </div>
  );
};