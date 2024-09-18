'use client'
import React, { useState } from 'react'
import StoryInfo from './story-info'
import { BookAIcon, BookTextIcon, HeartIcon, LanguagesIcon } from 'lucide-react'
import StoryPeople from './story-people'
import StorySide from './story-side'
export default function StoryCreatePage() {
  const [open, setOpen] = useState(false)

  return (
    <div className='max-w-5xl mx-auto lg:py-36 sm:pb-12'>
      
      <section>
  <div className="container">
    <h2 className="text-4xl font-bold md:text-6xl">Create <span className='text-ai'>Hot</span> Story</h2>
    <p className="mt-6 text-zinc-600 md:mb-20 md:text-lg">View our open roles.</p>
    <div className="mt-12 md:mt-20">
      <h3 className="mb-8 text-3xl font-medium md:text-4xl">Sales</h3>
      <ul className="divide-y divide-border  border-y border-border">
        <li className="group">
          <a href="#" className="flex items-center py-6">
            <div>
              <div className="font-medium md:text-lg">Sales Manager</div>
              <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">London</div>
            </div>
            <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
          </a>
        </li>
        <li className="group">
          <a href="#" className="flex items-center py-6">
            <div>
              <div className="font-medium md:text-lg">Sales Development Representative</div>
              <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">London</div>
            </div>
            <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
          </a>
        </li>
        <li className="group">
          <a href="#" className="flex items-center py-6">
            <div>
              <div className="font-medium md:text-lg">Sales Manager</div>
              <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">London</div>
            </div>
            <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
          </a>
        </li>
      </ul>
    </div>


    <section className="mt-12 md:mt-20">
      <h3 className="mb-8 text-3xl font-medium md:text-4xl">Vocabulary</h3>
     


  <div className="grid grid-cols-1 flex-col gap-10 rounded-lg border  bg-foreground/10 p-6 shadow-sm lg:grid-cols-2 lg:px-20 lg:py-16">
    <div>
      <h4 className="mb-2 text-2xl lg:text-4xl">Integrations</h4>
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
          onClick={() => setOpen(true)}
          className="rounded-lg border  bg-card text-card-foreground flex items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-zinc-100">
          <div className="flex items-start gap-2">
            <LanguagesIcon size={15} />
            <div>
              <h5 className="mb-2 font-medium leading-4">Vocabulary</h5>
            </div>
          </div>
           &rarr;
        </div>
      </a>
      <a href="#">
        <div
          onClick={() => setOpen(true)}
          className="rounded-lg border  bg-card text-card-foreground flex items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-zinc-100">
          <div className="flex items-start gap-2">
          <BookTextIcon size={15} />
            <div>
              <h5 className="mb-2 font-medium leading-4">Notebooks</h5>
            </div>
          </div>
           &rarr;
        </div>
      </a>
      <a href="#">
        <div
          onClick={() => setOpen(true)}
          className="rounded-lg border  bg-card text-card-foreground flex items-center justify-between gap-2 px-6 py-4 shadow-none hover:bg-zinc-100">
          <div className="flex items-start gap-2">
            <HeartIcon size={15} />
            <div>
              <h5 className="mb-2 font-medium leading-4">Favourite</h5>
            </div>
          </div>
           &rarr;
        </div>
      </a>
    </div>
</div>
</section>

    <div className="mt-12 md:mt-20">
      <h3 className="mb-8 text-3xl font-medium md:text-4xl">Choose Characters</h3>
      <ul className="divide-y divide-border  border-y border-border">
        <li className="group">
          <a href="#" className="flex items-center py-6">
            <div>
              <div className="font-medium md:text-lg">You choosed 8 characters</div>
              {/* <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">London</div> */}
            </div>
            <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
          </a>
        </li>
      </ul>
    </div>




  </div>

</section>

      <StoryPeople />

      <StorySide open={open} setOpen={setOpen} />
    </div>
  )
}
