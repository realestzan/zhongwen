import React from 'react'

export default function Page() {
  return (
    <div className='max-w-5xl mx-auto lg:py-36'>
      
      <section >
    <div className="mx-auto">
      <h1 className="mx-auto mb-16 max-w-screen-sm text-pretty text-center text-4xl font-semibold lg:text-5xl">
        Get your team on the same page, literally
      </h1>
      <div className="mt-10 flex flex-col gap-6">
        <div className="rounded-lg border  bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6 pb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
              className="lucide lucide-code size-5">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <div className="p-6 pt-0 text-left">
            <h2 className="mb-1 text-lg font-semibold">Collaborate or co-edit together</h2>
            <p className="leading-snug text-zinc-600">
              Allow others to comment or suggest edits. Just type the @ key to get their attention.
            </p>
          </div>
          <div className="flex items-center p-6 pt-0 justify-end pb-0">
            <img className="h-[500px] w-full rounded-t-md object-cover object-center"
              src="/word-1.svg" alt="placeholder" />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="rounded-lg border  bg-card text-card-foreground shadow-sm w-full">
            <div className="flex flex-col space-y-1.5 p-6 pb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-git-branch size-5">
                <line x1="6" x2="6" y1="3" y2="15"></line>
                <circle cx="18" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M18 9a9 9 0 0 1-9 9"></path>
              </svg>
            </div>
            <div className="p-6 pt-0 text-left">
              <h2 className="mb-1 text-lg font-semibold">Card Title</h2>
              <p className="leading-snug text-zinc-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-center p-6 pt-0 justify-end pb-0 pr-0">
              <img className="h-full max-h-96 w-full rounded-tl-md object-cover object-center"
                src="/word-1.svg" alt="placeholder" />
            </div>
          </div>
        
        </div>
      </div>
    </div>
</section>


<section >
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border  bg-card text-card-foreground shadow-sm p-6 lg:col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          className="lucide lucide-app-window-mac mb-1 w-7">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="M6 8h.01"></path>
          <path d="M10 8h.01"></path>
          <path d="M14 8h.01"></path>
        </svg>
        <div className="text-left">
          <h2 className="mb-1 mt-4 text-lg font-semibold">Get your team on the same page.</h2>
          <p className="text-zinc-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut odit pariatur, ullam
            delectus modi excepturi ea dignissimos mollitia minima unde animi qui omnis.
          </p>
        </div>
        <div className="mt-7">
          <img className="aspect-square max-h-[500px] w-full rounded-t-md object-cover object-center"
            src="/word-1.svg" alt="placeholder" />
        </div>
      </div>
      <div className="rounded-lg border  bg-card text-card-foreground shadow-sm flex flex-col justify-between p-6">
        <div className="text-left">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-zap mb-1 w-7">
            <path
              d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
            </path>
          </svg>
          <h2 className="mb-1 mt-4 text-lg font-semibold">Fast and easy to use.</h2>
          <p className="text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti sed.
          </p>
        </div>
        <img className="mt-7 aspect-square rounded-t-md object-cover lg:aspect-auto lg:h-full"
          src="/word-2.svg" alt="placeholder" />
      </div>
    </div>

</section>



<section >
    <div className="space-y-10 rounded-lg border  py-10 md:px-4">
      <div className="grid rounded-lg border  md:grid-cols-2">
        <div className="flex flex-col px-6 py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-20">
          <h3 className="mb-3 text-2xl font-medium sm:mb-5 md:text-3xl lg:text-4xl">Secure Payments</h3>
          <div className="mb-8 text-sm text-zinc-600 sm:mb-10 md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur modi et recusandae
            ducimus eligendi eveniet soluta reprehenderit nostrum expedita omnis.
          </div>
          <ul className="mt-auto space-y-2 sm:space-y-3">
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-circle-check-big mt-0.5 size-4 shrink-0 sm:mt-1">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <p className="text-sm md:text-base">Secure payment gateway integration with Stripe</p>
            </li>
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-circle-check-big mt-0.5 size-4 shrink-0 sm:mt-1">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <p className="text-sm md:text-base">SSL encryption for secure transactions</p>
            </li>
          </ul>
        </div>
        <div className="relative order-first max-h-80 md:order-last md:max-h-[500px]">
          <img src="/word-1.svg" alt="placeholder"
            className="h-full w-full object-cover" /><span
            className="absolute left-5 top-5 flex size-6 items-center justify-center rounded-sm bg-zinc-900 font-mono text-xs text-white md:left-10 md:top-10">01</span>
        </div>
      </div>
      <div className="grid rounded-lg border  md:grid-cols-2">
        <div className="flex flex-col px-6 py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-20">
          <h3 className="mb-3 text-2xl font-medium sm:mb-5 md:text-3xl lg:text-4xl">
            Automated Invoicing
          </h3>
          <div className="mb-8 text-sm text-zinc-600 sm:mb-10 md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur modi et recusandae
            ducimus eligendi eveniet soluta reprehenderit nostrum expedita omnis.
          </div>
          <ul className="mt-auto space-y-2 sm:space-y-3">
            <li className="flex gap-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-circle-check-big mt-0.5 size-4 shrink-0 sm:mt-1">
                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                <path d="m9 11 3 3L22 4"></path>
              </svg>
              <p className="text-sm md:text-base">Automated invoicing for easy billing</p>
            </li>
          </ul>
        </div>
        <div className="relative order-first max-h-80 md:order-last md:max-h-[500px]">
          <img src="/word-2.svg" alt="placeholder"
            className="h-full w-full object-cover" /><span
            className="absolute left-5 top-5 flex size-6 items-center justify-center rounded-sm bg-zinc-900 font-mono text-xs text-white md:left-10 md:top-10">02</span>
        </div>
      </div>
    </div>
</section>


<section >
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border  bg-card text-card-foreground shadow-sm p-6 lg:col-span-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          className="lucide lucide-app-window-mac mb-1 w-7">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="M6 8h.01"></path>
          <path d="M10 8h.01"></path>
          <path d="M14 8h.01"></path>
        </svg>
        <div className="text-left">
          <h2 className="mb-1 mt-4 text-lg font-semibold">Get your team on the same page.</h2>
          <p className="text-zinc-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut odit pariatur, ullam
            delectus modi excepturi ea dignissimos mollitia minima unde animi qui omnis.
          </p>
        </div>
        <div className="mt-7">
          <img className="aspect-square max-h-[500px] w-full rounded-t-md object-cover object-center"
            src="/word-1.svg" alt="placeholder" />
        </div>
      </div>
      <div className="rounded-lg border  bg-card text-card-foreground shadow-sm flex flex-col justify-between p-6">
        <div className="text-left">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-zap mb-1 w-7">
            <path
              d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
            </path>
          </svg>
          <h2 className="mb-1 mt-4 text-lg font-semibold">Fast and easy to use.</h2>
          <p className="text-zinc-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti sed.
          </p>
        </div>
        <img className="mt-7 aspect-square rounded-t-md object-cover lg:aspect-auto lg:h-full"
          src="/word-2.svg" alt="placeholder" />
      </div>
    </div>
   
</section>
    </div>
  )
}
