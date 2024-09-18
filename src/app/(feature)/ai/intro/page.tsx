'use client'
import AnimatedSection from "@/components/animate/section";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Page() {

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const section1InView = useInView(section1Ref, { once: true });
  const section2InView = useInView(section2Ref, { once: true });


    return (
    <main className="mx-auto"> 
      


      {/* <section className="lg:py-32 max-w-6xl mx-auto">
  <div>
    <div className="grid items-center gap-8 lg:grid-cols-2">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <div
          className="inline-flex items-center rounded-full border  px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
          New Release<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-arrow-down-right ml-2 size-4">
            <path d="m7 7 10 10"></path>
            <path d="M17 7v10H7"></path>
          </svg>
        </div>
        <h1 className="my-6 text-pretty text-3xl font-semibold lg:text-5xl">A Universal Hero Section</h1>
        <p className="mb-8 max-w-xl text-zinc-600 lg:text-lg">
          Universal design in UI aims to create interfaces that are accessible and usable for users of all abilities. It
          involves designing with flexibility, providing alternative input methods, and ensuring compatibility with
          assistive technologies.
        </p>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
          <a href="/ai"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full sm:w-auto">
            Get Started</a><a href="/chat/entry"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  border-input bg-zinc-200 hover:bg-zinc-100 text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
            Try Demo Version<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              className="lucide lucide-arrow-down-right ml-2 size-4">
              <path d="m7 7 10 10"></path>
              <path d="M17 7v10H7"></path>
            </svg>
          </a>
        </div>
      </div>
      <video autoPlay loop muted src="/video-10.mp4"
        className="max-h-96 w-full rounded-md object-cover" />
    </div>
  </div>
</section> */}

<AnimatedSection ref={section1Ref} isInView={section1InView}>
<section className="lg:py-32 mx-auto max-w-6xl">
  <div>
    <div className="mx-auto flex max-w-5xl flex-col items-center">
      <div className="z-10 flex flex-col items-center gap-8 text-center">
        <div className="max-w-screen-md">
          <h1 className="mb-4 text-pretty text-4xl font-semibold lg:text-6xl">
            Learn With Aid From AI <span className='text-ai'>LLM</span>  Models
          </h1>
          <p className="text-zinc-600 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat
            omnis! Porro facilis quo animi consequatur. Explicabo.
          </p>
        </div>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
          <a href="/ai"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2">
            Get started now  &rarr;</a><a href="/chat/entry"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2">
            Demo Version&rarr;
          </a>
        </div>
      </div>
    </div>
    <div className="mx-auto mt-20 max-w-6xl grid-cols-5 md:grid">
        <video autoPlay loop muted src="/video-9.mp4"
        className="col-span-3 h-full max-h-[500px] w-full object-cover" />
      <div className="relative col-span-2">
        <video autoPlay loop muted src="/video-11.mp4"
          className="h-full max-h-[500px] w-full border-t object-cover md:border-l lg:border-t-0" /><button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 absolute bottom-5 right-5">
          Learn more &rarr;
        </button>
      </div>
    </div>
    <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-6">
      <img src="https://cdn.worldvectorlogo.com/logos/chatgpt-6.svg" alt="logo" className="h-6 sm:h-6" /><img
        src="https://cdn.worldvectorlogo.com/logos/google-bard-1.svg" alt="logo" className="h-8 sm:h-10" /><img
        src="https://cdn.worldvectorlogo.com/logos/ai.svg" alt="logo" className="h-4 sm:h-6" /><img
        src="https://cdn.worldvectorlogo.com/logos/google-ai-1.svg" alt="logo" className="h-8 sm:h-10" />
    </div>
  </div>
</section>
</AnimatedSection>

<AnimatedSection ref={section2Ref} isInView={section2InView}>
<section className="py-32 max-w-6xl mx-auto">
<div>
  <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border  p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
    <div>
      <h4 className="mb-2 text-2xl font-bold lg:text-4xl">Integrations</h4>
      <p className="text-zinc-600">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo praesentium
        nisi, accusantium quae.
      </p>
      <div className="mt-8 flex flex-col items-center gap-2 sm:flex-row">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full sm:w-auto">
          Get Started<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-arrow-right ml-2 size-4">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg></button><button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  border-input bg-white hover:bg-zinc-100 text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
          Contact Sales
        </button>
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <a href="#">
        <div
          className="rounded-lg border  bg-card text-card-foreground flex items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-zinc-100">
          <div className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
              className="lucide lucide-file size-4">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            </svg>
            <div>
              <h5 className="mb-2 font-medium leading-4">Documentation</h5>
              <p className="text-sm text-zinc-600">
                Lorem ipsum dolor, sit amet consectetur.
              </p>
            </div>
          </div>
           &rarr;
        </div>
      </a><a href="#">
        <div
          className="rounded-lg border  bg-card text-card-foreground flex items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-zinc-100">
          <div className="flex items-start gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
              className="lucide lucide-book size-4">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
            </svg>
            <div>
              <h5 className="mb-2 font-medium leading-4">Getting Started</h5>
              <p className="text-sm text-zinc-600">
                Lorem ipsum dolor, sit amet consectetur.
              </p>
            </div>
          </div>
           &rarr;
        </div>
      </a>
    </div>
  </div>
</div>
</section>
</AnimatedSection>
    </main>
    )
  }
  