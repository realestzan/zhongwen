'use client'
import React, { useRef, useState } from 'react'
import Notification from '@/components/generic/notification';



import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import AnimatedSection from '@/components/animate/section';
import { useInView } from 'framer-motion';
import { fetchAITranslation } from '@/utils/prompt';


export default function Page() {
  const [translateStatus, setTranslateStatus] = useState<1 | 2 | 3>(1);
  const [text, setText] = useState('今天我学习中文');
  const [translatedText, setTranslatedText] = useState('');

  const getTextSizeClass = (text: string) => {
    if (text.length < 10) return 'text-[8dvh]';
    if (text.length < 20) return 'text-[7.5dvh]';
    if (text.length < 30) return 'text-[7dvh]';
    if (text.length < 40) return 'text-[6.5dvh]';
    if (text.length < 50) return 'text-[6dvh]';
    if (text.length < 60) return 'text-[5.5dvh]';
    if (text.length < 70) return 'text-[5dvh]';
    if (text.length < 80) return 'text-[4.5dvh]';
    if (text.length < 90) return 'text-[4.5dvh]';
    if (text.length < 100) return 'text-[4dvh]';
    return 'text-[2dvh]';
  };


  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTranslateStatus(2);
    try {
      // Fetch response from API (assuming fetchChatGPTResponse is defined)
      const chatResponse = await fetchAITranslation(text);
      setTranslatedText(chatResponse);
    } catch (error) {
      console.error('Error fetching response:', error);
    } finally {
      setTranslateStatus(3);
    }
  };

  const handleReset = () => { 
    setText('');
    setTranslatedText('');
    setTranslateStatus(1);
  }

  const handleCopy = async (e: React.FormEvent) => {
    navigator.clipboard.writeText(translatedText).then(() => {
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  const section1Ref = useRef(null);
  const section1InView = useInView(section1Ref, { once: true });

  return (
    <div className='relative'>
       <div className='max-w-4xl fixed bottom-4 w-[30vw]'>
       {/* <Notification 
        isOn={translateStatus === 3}
        title="Copied!" 
        description="You can use the translation now." 
      /> */}
      </div>

      <AnimatedSection ref={section1Ref} isInView={section1InView}>
      <section className="lg:py-32 mx-auto max-w-5xl">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 flex flex-col items-center gap-8 text-center">
              <div className="max-w-screen-md">
                <h1 className="mb-4 text-pretty text-4xl font-semibold lg:text-6xl">
                  Translate On <span className={` ${translateStatus != 3 && 'text-ai'}`}>Steroid</span>
                </h1>
                <p className="text-zinc-600 lg:text-xl">
                  You can choose Manual Translate or Translate with Aid from AI
                </p>
              </div>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2">
                  Translate With AI &rarr;
                </button>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2">
                  Manual Translate &rarr;
                </button>
              </div>
            </div>
          </div>

          <div className={`mx-auto mt-20 max-w-7xl grid-cols-5 md:grid transition scale-100 ${translateStatus == 2 && 'scale-95'} ${translateStatus == 3 && 'scale-100'}`}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={` ${translateStatus == 1 ? 'col-span-3 opacity-1' : 'opacity-0 hidden'} transition duration-300
                ${getTextSizeClass(text)}
                bg-foreground/10 z-30 p-12 max-sm:p-8 placeholder:text-black outline-none border-r-0 border-foreground h-[500px] w-full object-cover`}
            />

            <video autoPlay loop muted src="/video-10.mp4"
              className={` 
                ${translateStatus != 2 && 'opacity-1'}
                col-span-2
               transition duration-300
                border-r-0 border-foreground h-full w-full object-cover`}
            />
            
            <div className={`relative ${translateStatus != 1 ? 'col-span-3 opacity-1' : 'opacity-0 hidden'} transition duration-300 bg-foreground/10`} onClick={handleCopy}
            >
              {/* 
                className="h-full h-[500px] w-full border-t object-cover md:border-l lg:border-t-0" /> */}

                 <textarea
                 value={translatedText}
                  onChange={(e) => setTranslatedText(e.target.value)}
                className={` ${getTextSizeClass(translatedText)} ${translateStatus == 2 && 'hidden'} overflow-scroll text-ai cursor-pointer h-[500px] w-full border-t object-cover md:border-l lg:border-t-0 outline-none bg-foreground/10 p-12 max-sm:p-8`}
                  />

                  {translateStatus == 2 && (
          <div className='mt-20 mx-auto z-20 border-t object-cover md:border-l lg:border-t-0 outline-none h-[400px] p-4`}'>
             <div className="dark:hidden flex items-center justify-center gap-8"><l-grid size="300" color="black"></l-grid></div>
             <div className="hidden dark:flex items-center justify-center gap-8"><l-grid size="300" color="white"></l-grid></div>
          </div>)}


              <button onClick={handleCopy}
                className="inline-flex text-black items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 absolute bottom-2 right-24">
                Copy
              </button>

              <button onClick={handleReset}
                className="inline-flex text-black items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 absolute bottom-2 right-2">
                Retry &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>



    <section className='max-w-5xl mb-36 relative mx-auto group'>
    <a href='/signin' className='absolute bottom-0 right-0 top-0 left-0 z-20 opacity-0 w-full flex items-center justify-center text-center text-3xl group-hover:opacity-100 transition duration-500 font-bold'>Sign <span className='px-2 text-ai'> in </span> first</a>
      <h2 className='py-8 px-4 text-3xl font-bold group-hover:blur-[3px] group-hover:opacity-40 transition duration-500'>History</h2>
    <Table className='group-hover:blur-[3px] group-hover:opacity-40 transition duration-500'>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </section>
      
    </div>
  )
}