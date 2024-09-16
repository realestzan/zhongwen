'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="mx-auto w-fit max-w-6xl">
    

    <section className="py-32">
  <div className="overflow-hidden border-b border-muted">
    <div className="container">
      <div className="mx-auto flex max-w-5xl flex-col items-ď">
        <div className="z-10 items-ď text-gray-700 dark:text-gray-200">
          <h1 className="mb-8 text-gray-700 dark:text-gray-200 text-4xl font-medium lg:text-8xl">
            Build your next project with Blocks
          </h1>
          <p className="mx-auto max-w-screen-md text-gray-700 dark:text-gray-200 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat
            omnis! Porro facilis quo animi consequatur. Explicabo.
          </p>
          <div className="mt-12 flex w-full flex-col justify-ď gap-2 sm:flex-row">
            <button
              className="inline-flex items-ď justify-ď whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2">
              Get started now<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-chevron-right ml-2 h-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg></button><button
              className="inline-flex items-ď justify-ď whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2">
              Learn more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-chevron-right ml-2 h-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img src="/topic-1.svg" alt="placeholder"
        className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg" />
    </div>
  </div>
</section>




      <section className="py-32">
  <div className="container">
    <div className="flex flex-col items-ď gap-6">
      <div
        className="inline-flex items-ď w-fit rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
        Badge
      </div>
      <h2 className="mb-2 text-gray-700 dark:text-gray-200 text-3xl font-semibold lg:text-5xl">
        This is where your feature goes
      </h2>
      <p className="text-gray-700 dark:text-gray-200 lg:text-lg">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="mt-6 flex flex-col gap-6 lg:flex-row">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between gap-5 lg:w-1/3">
          <div className="flex flex-col space-y-1.5 p-6 items-start">
            <div
              className="inline-flex items-ď rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              Badge
            </div>
          </div>
          <div className="p-6 pt-0 text-lg lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum ullam.
            Voluptatibus.
          </div>
          <div className="flex items-ď p-6 pt-0">
            <button
              className="inline-flex items-ď justify-ď whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2">
              Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-chevron-right ml-2 h-4 w-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="lg:w-1/3">
          <img src="/topic-2.svg" alt=""
            className="h-full max-h-96 w-full rounded-md object-cover" />
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between gap-5 lg:w-1/3">
          <div className="flex flex-col space-y-1.5 p-6 items-start">
            <div
              className="inline-flex items-ď rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
              Badge
            </div>
          </div>
          <div className="p-6 pt-0 text-lg lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nostrum ullam.
            Voluptatibus.
          </div>
          <div className="flex items-ď p-6 pt-0">
            <button
              className="inline-flex items-ď justify-ď whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2">
              Read more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-chevron-right ml-2 h-4 w-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>








<section className="py-32">
  <div>
    <div>
      <h1 className="mb-16 text-gray-700 dark:text-gray-200 text-4xl font-semibold lg:text-5xl">
        Get your team on the same page, literally
      </h1>
      <div className="mt-10 flex flex-col gap-6">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
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
            <p className="leading-snug text-gray-700 dark:text-gray-200">
              Allow others to comment or suggest edits. Just type the @ key to get their attention.
            </p>
          </div>
          <div className="flex items-ď p-6 pt-0 justify-end pb-0">
            <img className="h-[500px] w-full rounded-t-md object-cover object-ď"
              src="/illu-1.jpeg" alt="placeholder" />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full">
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
              <p className="leading-snug text-gray-700 dark:text-gray-200">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="flex items-ď p-6 pt-0 justify-end pb-0 pr-0">
              <img className="h-full max-h-96 w-full rounded-tl-md object-cover object-ď"
                src="/illu-1.jpeg" alt="placeholder" />
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm flex w-full flex-col justify-between gap-10 md:gap-20">
            <div className="flex flex-col space-y-1.5 p-6 items-start pb-1">
              <img className="h-8" src="/images/placeholders/logos/figma.svg" alt="" />
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




<section className="py-32">
  <div className="container">
    <div className="space-y-10 rounded-lg border py-10 md:px-4">
      <div className="grid rounded-lg border md:grid-cols-2">
        <div className="flex flex-col px-6 py-8 lg:px-8 lg:py-12 xl:px-12 xl:py-20">
          <h3 className="mb-3 text-2xl font-medium sm:mb-5 md:text-3xl lg:text-4xl">Secure Payments</h3>
          <div className="mb-8 text-sm text-gray-700 dark:text-gray-200 sm:mb-10 md:text-base">
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
          <img src="/illu-1.jpeg" alt="placeholder"
            className="h-full w-full object-cover" /><span
            className="absolute left-5 top-5 flex size-6 items-center justify-center rounded-sm bg-zinc-900 font-mono text-xs text-white md:left-10 md:top-10">01</span>
        </div>
      </div>
      <div className="grid rounded-lg border md:grid-cols-2">
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
          <img src="/illu-1.jpeg" alt="placeholder"
            className="h-full w-full object-cover" /><span
            className="absolute left-5 top-5 flex size-6 items-center justify-center rounded-sm bg-zinc-900 font-mono text-xs text-white md:left-10 md:top-10">02</span>
        </div>
      </div>
    </div>
  </div>
</section>









<section className="py-32">
  <div className="container">
    <p className="mb-4 text-sm text-gray-700 dark:text-gray-200 lg:text-base">OUR VALUES</p>
    <h2 className="text-3xl font-medium lg:text-4xl">Why Choose Us?</h2>
    <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
      <div className="rounded-lg bg-zinc-100 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-timer size-6">
            <line x1="10" x2="14" y1="2" y2="2"></line>
            <line x1="12" x2="15" y1="14" y2="11"></line>
            <circle cx="12" cy="14" r="8"></circle>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Performance</h3>
        <p className="leading-7 text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </div>
      <div className="rounded-lg bg-zinc-100 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-zoom-in size-6">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
            <line x1="11" x2="11" y1="8" y2="14"></line>
            <line x1="8" x2="14" y1="11" y2="11"></line>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Quality</h3>
        <p className="leading-7 text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </div>
      <div className="rounded-lg bg-zinc-100 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-white"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-zap size-6">
            <path
              d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
            </path>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Innovation</h3>
        <p className="leading-7 text-gray-700 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </div>
    </div>
  </div>
</section>






<section className="py-32">
  <div className="container max-w-7xl">
    <h2 className="text-3xl font-medium lg:text-4xl">A better way to build websites</h2>
    <div className="mt-20 grid gap-9 lg:grid-cols-2">
      <div className="flex flex-col justify-between rounded-lg bg-zinc-100">
        <div className="flex justify-between gap-10 border-b">
          <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
            <p className="text-xs text-gray-700">FOR DESIGNERS</p>
            <h3 className="text-2xl text-gray-700 md:text-4xl">Built for artists and designers</h3>
          </div>
          <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
            <img src="/illu-1.jpeg" alt="placeholder" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="p-4 text-gray-700 md:p-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore
          quis facilis molestias!
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-lg bg-zinc-10ð">
        <div className="flex justify-between gap-10 border-b">
          <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
            <p className="text-xs text-gray-700 dark:text-gray-200">FOR DEVELOPERS</p>
            <h3 className="text-2xl md:text-4xl">Built for coders and developers</h3>
          </div>
          <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
            <img src="/illu-1.jpeg" alt="placeholder" className="h-full w-full object-cover" />
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


    </div>
  )
}
