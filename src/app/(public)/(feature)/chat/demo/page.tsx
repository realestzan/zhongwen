'use client'
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { fetchAIDictionary } from '@/utils/prompt';

const Page = () => {
  const [prompt, setPrompt] = useState('学习');
  const [response, setResponse] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    try {
      // Fetch response from API (assuming fetchChatGPTResponse is defined)
      const chatResponse = await fetchAIDictionary(prompt);
      setResponse(chatResponse);
    } catch (error) {
      console.error('Error fetching response:', error);
    } finally {
      setIsPending(false);
    }
  };


  const parseResponse = (text: string) => {
    const tagRegex = /#\w+/g;
    const boldRegex = /\*\*(.*?)\*\*/g;
    const headerRegex = /## (.*?)(?=\n|$)/g;
    const linkRegex = /\[\[(.*?)\]\]/g;
    const strongRegex = /\((.*?)\)/g;
    const orderedListRegex = /^\d+\.\s(.*)/gm;
    const unorderedListRegex = /^-\s(.*)/gm;

    const parts = text.split(/(#\w+|\*\*.*?\*\*|## .*?(?=\n|$)|\[\[.*?\]\]|\(.*?\)|^\d+\.\s.*|^-.*)/gm);

    return (
      <>
        {parts.map((part, index) => {
          if (tagRegex.test(part)) {
            return <Badge key={index}>{part}</Badge>;
          } else if (boldRegex.test(part)) {
            return (
              <strong key={index}>
                {part.replace(/\*\*/g, '').split('').map((char, i) => (
                  <span key={i} className="bold-character">{char}</span>
                ))}
              </strong>
            );
          } else if (headerRegex.test(part)) {
            return <h2 className='text-4xl font-black text-background bg-foreground w-fit py-2 px-4 rounded-xl ' key={index}>{part.replace(/## /, '')}</h2>;
          } else if (linkRegex.test(part)) {
            const url = part.replace(/\[\[|\]\]/g, '');
            return <Button variant={'link'} key={index} className='bg-foreground/10 mr-2'>{url}</Button>;
          } else if (strongRegex.test(part)) {
            return <strong key={index}>{part.replace(/\(|\)/g, '')}</strong>;
          } else if (orderedListRegex.test(part)) {
            return (
                <div key={part} className='m-8'>{part.replace(/^\d+\.\s/, '')}</div>
            );
          } else if (unorderedListRegex.test(part)) {
            return (
                <h1 key={part} className='mt-4'>{part.replace(/^-/, '').trim()}</h1>
            );
          } else {
          return <React.Fragment key={index}>{part}</React.Fragment>;
        }
      })}
    </>
  );
};
  const renderResponse = (text: string) => {
    const lines = text.split('\n');
    return (
      <>
        {lines.map((line, index) => (
          <p key={index}>{parseResponse(line)}</p>
        ))}
      </>
    );
  };

  return (
    <div className='max-w-5xl lg:py-36 mx-auto'>

<section >
  <div>
    <div className="mx-auto flex flex-wrap items-center 2xl:max-w-7xl">
      <div className="mb-16 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pr-24">
        <span className="mb-8 text-xs font-bold uppercase tracking-widest text-foreground">
          Your tagline
        </span>
        <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter md:text-7xl lg:text-5xl">
          This AI is <span className='text-ai'>Dictionary</span> on <span className='text-ai'>Steroid</span>
        </h1>
        <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
          Free and Premium themes, UI Kit's, templates and landing pages built
          with Tailwind CSS, HTML & Next.js.
        </p>
        <form action="" method="post" id="revue-form" name="revue-form" target="_blank"
          className="border mt-8 rounded-xl bg-gray-50 p-2 transition duration-500 ease-in-out sm:flex sm:max-w-lg">
          <div className=" min-w-0 flex-1">
            <input
              className="block w-full rounded-md border border-transparent bg-transparent px-5 py-3 text-base text-gray-600 transition duration-500 ease-in-out placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              placeholder="Enter your email  " />
          </div>
          <div className=" mt-4 sm:ml-3 sm:mt-0">
            <button onClick={handleSubmit}
              className="block w-full rounded-lg border border-transparent bg-black px-5 py-3 text-base font-medium text-white shadow hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">AI Analytics</button>
          </div>
        </form>

        <div className="sm:flex sm:max-w-lg">
          <p className="mt-3 text-xs text-gray-500">
            By subscribing, you agree with Wickedblocks
            <a className="underline" href="#">Terms of Service</a>
            and
            <a className="underline" href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
      <div className="mt-12 w-full rounded-xl lg:w-5/6 lg:max-w-lg xl:mt-0">
        <div>
          <div className="relative w-full max-w-lg">
            <div className="relative">
              <video autoPlay muted loop className="mx-auto rounded-lg object-cover object-center"
                src="/video-8.mp4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{isPending ? 
          <div className='mt-20 mx-auto'>
             <span className="dark:hidden flex items-center text-5xl gap-8">Thinking<l-grid size="75" color="black"></l-grid></span>
             <span className="hidden dark:flex items-center text-5xl gap-8">Thinking<l-grid size="75" color="white"></l-grid></span>
          </div>
          : ""}

      {response && (
        <div className='min-h-screen mt-36'>
          {/* <h2>Response:</h2> */}
          <button onClick={() => setResponse('')}>Retry</button>

          <div className={` ${!isPending && 'scale-100 opacity-100'} 'opacity-50 scale-70 transition text-2xl my-4 leading-8`}>{renderResponse(response)}</div>
        </div>
      )}
  
  </div>
  );
};

export default Page;