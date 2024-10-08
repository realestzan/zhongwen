'use client'

import { useRef, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { motion, useInView } from 'framer-motion'
import AnimatedSection from '@/components/animate/section'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const onboardingRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  const onboardingInView = useInView(onboardingRef, { once: true });
  const section1InView = useInView(section1Ref, { once: true });
  const section2InView = useInView(section2Ref, { once: true });
  const section3InView = useInView(section2Ref, { once: true });
  const section4InView = useInView(section2Ref, { once: true });
  const section5InView = useInView(section5Ref, { once: true });


  const page_content = { 
    onboarding_title: "Master Chinese with real-time AI assistance. Enhance your learning through personalized tools, interactive lessons, and instant feedback.",
    onboarding_subtitle: "Master Chinese with real-time AI assistance. Enhance your learning through personalized tools, interactive lessons, and instant feedback.",


    section1_title: "Explore Key Features",
  section1_subtitle: "Discover the tools that make learning Chinese faster and more engaging.",
  section1_card1_title: "Interactive Dictionary",
  section1_card1_description: "Quickly look up Chinese words with examples and pronunciations.",
  section1_card1_button: "Learn more",
  section1_card2_title: "AI Conversation Practice",
  section1_card2_description: "Chat with AI in Chinese to improve speaking skills.",
  section1_card2_button: "Start now",
  section1_card3_title: "Personalized Learning",
  section1_card3_description: "Track progress and receive tailored exercises.",
  section1_card3_button: "Get started",



  section5_title: "Why Choose Us?",
  section5_subtitle: "Our values make your learning experience unique and effective.",
  
 
  section5_card1_title: "Performance",
  section5_card1_description: "Achieve faster progress with efficient and personalized learning tools.",
  
  section5_card2_title: "Quality",
  section5_card2_description: "Access expertly curated lessons and materials for effective learning.",
  
  section5_card3_title: "Innovation",
  section5_card3_description: "Experience cutting-edge AI technology designed to boost your language skills."
};

  return (
    <div className="mx-auto w-fit max-w-6xl">
<AnimatedSection ref={onboardingRef} isInView={onboardingInView}>
    <section className="lg:py-36">
  <div className="overflow-hidden border-b border-muted">
    <div className="container">
      <div className="mx-auto flex max-w-5xl flex-col items-ď">
        <div className="z-10 items-ď text-gray-700 dark:text-gray-200">
          <h1 className="mb-8 text-gray-700 dark:text-gray-200 text-4xl font-medium lg:text-8xl">
            Learn Chinese with <span className='text-ai cursor-pointer'>Zhonegwen</span> - AI built in
          </h1>
          <p className="mx-auto max-w-screen-md text-gray-700 dark:text-gray-200 lg:text-xl">{page_content.onboarding_subtitle}</p>
          <div className="mt-12 flex w-full flex-col justify-ď gap-2 sm:flex-row">
            <button
              className="inline-flex items-ď justify-ď whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2">
              Get started now<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
                className="lucide lucide-chevron-right ml-2 h-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg></button><button
              className="inline-flex items-ď justify-ď whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-100 hover:text-zinc-800 text-zinc-500 h-10 px-4 py-2">
              Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
                className="lucide lucide-chevron-right ml-2 h-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <img src="/topic-1.svg" alt="placeholder"
        className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg" /> */}
        <video src="/video-4.mp4" autoPlay loop muted className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg"></video>
    </div>
  </div>
</section>
</AnimatedSection>


<AnimatedSection ref={section1Ref} isInView={section1InView}>
      <section className="py-32">
  <div className="container">
    <div className="flex flex-col items-ď gap-6">
      <div
        className="inline-flex items-ď w-fit rounded-full border  px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
        Badge
      </div>
      <h2 className="mb-2 text-gray-700 dark:text-gray-200 text-3xl font-semibold lg:text-5xl">
      {page_content.section1_title}
      </h2>
      <p className="text-gray-700 dark:text-gray-200 lg:text-lg">{page_content.section1_subtitle}</p>
      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        <div
          className="rounded-lg border  bg-card text-card-foreground shadow-sm flex flex-col justify-between gap-5 lg:w-1/3">
          <div className="flex flex-col space-y-1.5 p-6 items-start">
            <div
              className="inline-flex items-ď rounded-full border  px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              Badge
            </div>
          </div>
          <div className="p-6 pt-0 text-lg lg:text-2xl flex flex-col">
            <span className='text-ai'>{page_content.section1_card1_title}</span><br/>
            {page_content.section1_card1_description}
          </div>
          <div className="flex items-ď p-6 pt-0">
            <a href='/dictionary/entry'
              className="inline-flex items-ď justify-ď whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  border-input bg-foreground hover:bg-foreground/20 text-background hover:text-foreground h-10 px-4 py-2">
              {page_content.section1_card1_button}  &rarr;              
            </a>
          </div>
        </div>
        <div className="lg:w-1/3">
          <img src="/topic-2.svg" alt=""
            className="h-full max-h-96 w-full rounded-md object-cover" />
        </div>
        <div
          className="rounded-lg border  bg-card text-card-foreground shadow-sm flex flex-col justify-between gap-5 lg:w-1/3">
          <div className="flex flex-col space-y-1.5 p-6 items-start">
            <div
              className="inline-flex items-ď rounded-full border  px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              Badge
            </div>
          </div>
          <div className="p-6 pt-0 text-lg lg:text-2xl flex flex-col">
            <span className='text-ai'>{page_content.section1_card2_title}</span><br/>
            {page_content.section1_card2_description}
          </div>
          <div className="flex items-ď p-6 pt-0">
            <a href='/chat/entry'
              className="inline-flex items-ď justify-ď whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  border-input bg-foreground hover:bg-foreground/20 text-background hover:text-foreground h-10 px-4 py-2">
              {page_content.section1_card2_button}  &rarr;              
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>







<AnimatedSection ref={section2Ref} isInView={section2InView}>
<section className="py-32">
  <div>
    <div>
      <h1 className="mb-16 text-gray-700 dark:text-gray-200 text-4xl font-semibold lg:text-5xl">
        Get your team on the same page, literally
      </h1>
      <div className="mt-10 flex flex-col gap-6">
        <div className="rounded-lg border  bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6 pb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin ="round"
              className="lucide lucide-code size-5">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div className="p-6 pt-0 text-left">
            <h2 className="mb-1 text-lg font-semibold">Collaborate or co-edit together</h2>
            <p className="leading-snug text-gray-700 dark:text-gray-200">
              Allow others to comment or suggest edits. Just type the @ key to get their attention.
            </p>
          </div>
          <div className="flex items-ď p-6 pt-0 justify-end pb-0">
            <video autoPlay loop muted className="h-[500px] w-full rounded-t-md object-cover object-ď"
              src="/video-8.mp4"></video>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="rounded-lg border  bg-card text-card-foreground shadow-sm w-full">
            <div className="flex flex-col space-y-1.5 p-6 pb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin ="round"
                className="lucide lucide-git-branch size-5">
                <line x1="6" x2="6" y1="3" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
            </div>
            <div className="p-6 pt-0 text-left">
              <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
              <p className="leading-snug text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-ď p-6 pt-0 justify-end pb-0 pr-0">
              <video autoPlay loop muted className="h-full max-h-96 w-full rounded-tl-md object-cover object-ď"
                src="/video-2.mp4"></video>
            </div>
          </div>
          <div
            className="rounded-lg border  bg-card text-card-foreground shadow-sm flex w-full flex-col justify-between gap-10 md:gap-20">
            <div className="flex flex-col space-y-1.5 p-6 items-start pb-1">
              <video autoPlay loop muted className="h-8" src="/video-4.mp4"></video>
            </div>
            <div className="p-6 pt-0 text-left">
              <q className="text-2xl md:text-3xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A sint, porro
                consequatur
                illo itaque rem dolor.</q>
            </div>
            <div className="flex p-6 pt-0 flex-col items-start text-xs">
              <p className="font-semibold">John Doe</p>
              <p className="text-gray-700 dark:text-gray-200">CET, Company Example</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>


<AnimatedSection ref={section3Ref} isInView={section3InView}>
<section className="py-32">
  <div className="container">
    <div className="space-y-10 rounded-lg border  py-10 md:px-4">
      <div className="grid rounded-lg border  md:grid-cols-2">
        <div className="flex flex-col px-6 py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-20">
          <h3 className="mb-3 text-2xl font-medium sm:mb-5 md:text-3xl lg:text-4xl">Secure Payments</h3>
          <div className="mb-8 text-sm text-gray-700 dark:text-gray-200 sm:mb-10 md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur modi et recusandae
            ducimus eligendi eveniet soluta reprehenderit nostrum expedita omnis.
          </div>
          <ul className="mt-auto space-y-2 sm:space-y-3">
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
                className="lucide lucide-circle-check-big mt-0.5 size-4 shrink-0 sm:mt-1">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <p className="text-sm md:text-base">Secure payment gateway integration with Stripe</p>
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
                className="lucide lucide-circle-check-big mt-0.5 size-4 shrink-0 sm:mt-1">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <p className="text-sm md:text-base">SSL encryption for secure transactions</p>
            </li>
          </ul>
        </div>
        <div className="relative order-first max-h-80 md:order-last md:max-h-[500px]">
          <video autoPlay muted loop src="/video-5.mp4" 
            className="h-full w-full object-cover" /><span
            className="absolute left-5 top-5 flex size-6 items-center justify-center rounded-sm bg-zinc-900 font-mono text-xs text-white md:left-10 md:top-10">01</span>
        </div>
      </div>
      <div className="grid rounded-lg border  md:grid-cols-2">
        <div className="flex flex-col px-6 py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-20">
          <h3 className="mb-3 text-2xl font-medium sm:mb-5 md:text-3xl lg:text-4xl">
            Automated Invoicing
          </h3>
          <div className="mb-8 text-sm text-gray-700 dark:text-gray-200 sm:mb-10 md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur modi et recusandae
            ducimus eligendi eveniet soluta reprehenderit nostrum expedita omnis.
          </div>
          <ul className="mt-auto space-y-2 sm:space-y-3">
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
                className="lucide lucide-circle-check-big mt-0.5 size-4 shrink-0 sm:mt-1">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <p className="text-sm md:text-base">Automated invoicing for easy billing</p>
            </li>
          </ul>
        </div>
        <div className="relative order-first max-h-80 md:order-last md:max-h-[500px]">
          <video autoPlay muted loop src="/video-1.mp4" 
            className="h-full w-full object-cover" /><span
            className="absolute left-5 top-5 flex size-6 items-center justify-center rounded-sm bg-zinc-900 font-mono text-xs text-white md:left-10 md:top-10">02</span>
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>








<AnimatedSection ref={section4Ref} isInView={section4InView}>
<section className="py-32">
  <div className="container">
    <p className="mb-4 text-sm text-gray-700 dark:text-gray-200 lg:text-base">{page_content.section5_subtitle}</p>
    <h2 className="text-3xl font-medium lg:text-4xl">{page_content.section5_title}</h2>
    <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
      <div className="rounded-lg bg-foreground/5 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-timer size-6">
            <line x1="10" x2="14" y1="2" y2="2"></line>
            <line x1="12" x2="15" y1="14" y2="11"></line>
            <circle cx="12" cy="14" r="8"></circle>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">{page_content.section5_card1_title}</h3>
        <p className="leading-7 text-gray-700 dark:text-gray-200">{page_content.section5_card1_description}</p>
      </div>
      <div className="rounded-lg bg-foreground/5 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-zoom-in size-6">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
            <line x1="11" x2="11" y1="8" y2="14"></line>
            <line x1="8" x2="14" y1="11" y2="11"></line>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">{page_content.section5_card2_title}</h3>
        <p className="leading-7 text-gray-700 dark:text-gray-200">{page_content.section5_card2_description}</p>
      </div>
      <div className="rounded-lg bg-foreground/5 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-zap size-6">
            <path
              d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
            </path>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">{page_content.section5_card3_title}</h3>
        <p className="leading-7 text-gray-700 dark:text-gray-200">{page_content.section5_card3_description}</p>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>




<AnimatedSection ref={section5Ref} isInView={section5InView}>
<section className="py-32">
  <div className="max-w-7xl">
    <h2 className="text-3xl font-medium lg:text-4xl">A better way to build websites</h2>
    <div className="mt-20 grid gap-9 lg:grid-cols-2">
      <div className="flex flex-col justify-between rounded-lg dark:bg-foreground/5">
        <div className="flex justify-between gap-10 border-b">
          <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
            <p className="text-xs">FOR DESIGNERS</p>
            <h3 className="text-2xl md:text-4xl">Built for artists and designers</h3>
          </div>
          <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
            <video autoPlay muted loop src="/video-6.mp4" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="p-4 md:p-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore
          quis facilis molestias!
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-lg dark:bg-foreground/5">
        <div className="flex justify-between gap-10 border-b">
          <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
            <p className="text-xs text-gray-700 dark:text-gray-200">FOR DEVELOPERS</p>
            <h3 className="text-2xl md:text-4xl">Built for coders and developers</h3>
          </div>
          <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
            <video autoPlay muted loop src="/video-7.mp4" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="p-4 text-gray-700 dark:text-gray-200 md:p-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore
          quis facilis molestias!
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>

    </div>
  )
}
