import React from 'react'

const Page = () => {
  return (
    <div>
      <section className="py-32 mx-auto px-12">
  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
    <div className="flex justify-end bg-zinc-100">
      <img src="/illu-1.jpeg" alt="placeholder hero"
        className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]" />
    </div>
    <div className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left">
      <div
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
        New Release<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          className="lucide lucide-arrow-down-right ml-2 size-4">
          <path d="m7 7 10 10"></path>
          <path d="M17 7v10H7"></path>
        </svg>
      </div>
      <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl">
        Blocks built with Wenzi &amp; Tailwind
      </h1>
      <p className="mb-8 max-w-xl  text-zinc-600 dark:text-gray-200 lg:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat
        omnis! Porro facilis quo animi consequatur. Explicabo.
      </p>
      <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full sm:w-auto">
          Primary Button</button><button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
          Secondary Button<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-arrow-down-right ml-2 size-4">
            <path d="m7 7 10 10"></path>
            <path d="M17 7v10H7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Page
