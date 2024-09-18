import React from 'react'

const Page = () => {
  return (
    <div>
      
      <section className="py-32">
  <div className="container max-w-6xl">
    <div className="flex flex-col items-center gap-4 md:gap-6">
      <div
        className="inline-flex items-center rounded-full border  px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
        Studies
      </div>
      <h1 className="max-w-2xl text-center text-3xl font-light md:text-5xl">
        Welcome to our innovative training platform
      </h1>
    </div>
    <div className="mt-16 flex flex-col justify-between gap-6 md:flex-row lg:mt-20 lg:gap-10">
      <div className="rounded-lg border  bg-card text-card-foreground shadow-sm group p-6">
        <a href="#"
          className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 text-zinc-500 h-10 px-4 py-2 ml-auto hidden w-fit cursor-pointer transition-all duration-200 group-hover:opacity-100 md:flex lg:tranzinc-y-2 lg:opacity-0 lg:group-hover:tranzinc-y-0">Learn
          more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-chevron-right ml-1 h-4">
            <path d="m9 18 6-6-6-6"></path>
          </svg></a>
        <div className="mt-6 flex gap-4">
          <p className="text-lg font-light lg:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt.
          </p>
          <a href="#"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 text-zinc-500 h-10 w-10 shrink-0 cursor-pointer md:hidden"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
              className="lucide lucide-chevron-right h-4">
              <path d="m9 18 6-6-6-6"></path>
            </svg></a>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm font-light lg:text-base">Built with</p>
          <p className="text-sm font-light lg:text-base">Built with</p>
          <img src="/images/placeholders/logos/figma.svg" alt="shadcn" className="h-5" />
        </div>
      </div>
      <div className="rounded-lg border  bg-card text-card-foreground shadow-sm group p-6">
        <a href="#"
          className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 text-zinc-500 h-10 px-4 py-2 ml-auto hidden w-fit cursor-pointer transition-all duration-200 group-hover:opacity-100 md:flex lg:tranzinc-y-2 lg:opacity-0 lg:group-hover:tranzinc-y-0">Learn
          more<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-chevron-right ml-1 h-4">
            <path d="m9 18 6-6-6-6"></path>
          </svg></a>
        <div className="mt-6 flex gap-4">
          <p className="text-lg font-light lg:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, deserunt.
          </p>
          <a href="#"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 text-zinc-500 h-10 w-10 shrink-0 cursor-pointer md:hidden"><svg
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
              className="lucide lucide-chevron-right h-4">
              <path d="m9 18 6-6-6-6"></path>
            </svg></a>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <p className="text-sm font-light lg:text-base">Styled with</p>
          <img src="/images/placeholders/logos/tailwind.svg" alt="shadcn" className="h-4" />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Page
