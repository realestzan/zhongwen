import React from 'react'

export default function Page() {
  return (
    <div>
      
      <section className="py-24">
  <div>
    <div className="flex w-full flex-col items-center">
      <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
        <p className="text-sm text-zinc-600">WHY WE ARE UNIQUE</p>
        <h2 className="text-3xl font-medium md:text-5xl">
          Bringing the best to you by the best in the industry
        </h2>
        <p className="text-zinc-600 md:max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at
          vitae molestias tenetur explicabo. Voluptatum amet architecto suscipit pariatur eligendi
          repellendus mollitia dolore unde sint?
        </p>
      </div>

      <a
                  href="/chat/demo"
                  className="inline-block rounded-md border  border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-black mt-8"
                >
                  Demo
                </a>


    </div>
    <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
      <a href='/story' className="flex flex-col justify-between rounded-lg bg-foreground/10 hover:scale-95 hover:shadow-2xl hover:shadow-foreground/10 transition p-6 md:min-h-[300px] md:p-8">
        <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-zoom-in size-6">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
            <line x1="11" x2="11" y1="8" y2="14"></line>
            <line x1="8" x2="14" y1="11" y2="11"></line>
          </svg></span>
        <div>
          <h3 className="text-lg font-medium md:text-2xl">Story</h3>
          <p className="mt-2 text-zinc-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at
            vitae molestias tenetur explicabo.
          </p>
        </div>
      </a>
      <a href='/talk' className="flex flex-col justify-between rounded-lg bg-foreground/10 hover:scale-95 hover:shadow-2xl hover:shadow-foreground/10 transition p-6 md:min-h-[300px] md:p-8">
        <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-zap size-6">
            <path
              d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
            </path>
          </svg></span>
        <div>
          <h3 className="text-lg font-medium md:text-2xl">Talk</h3>
          <p className="mt-2 text-zinc-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at
            vitae molestias tenetur explicabo.
          </p>
        </div>
      </a>
      <a href='/talk' className="flex flex-col justify-between rounded-lg bg-foreground/10 hover:scale-95 hover:shadow-2xl hover:shadow-foreground/10 transition p-6 md:min-h-[300px] md:p-8">
        <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-messages-square size-6">
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"></path>
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
          </svg></span>
        <div>
          <h3 className="text-lg font-medium md:text-2xl">Conversation Story</h3>
          <p className="mt-2 text-zinc-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at
            vitae molestias tenetur explicabo.
          </p>
        </div>
      </a>
      <a href='/talk' className="flex flex-col justify-between rounded-lg bg-foreground/10 hover:scale-95 hover:shadow-2xl hover:shadow-foreground/10 transition p-6 md:min-h-[300px] md:p-8">
        <span className="mb-6 flex size-11 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-infinity size-6">
            <path
              d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z">
            </path>
          </svg></span>
        <div>
          <h3 className="text-lg font-medium md:text-2xl">Grammar Check</h3>
          <p className="mt-2 text-zinc-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at
            vitae molestias tenetur explicabo.
          </p>
        </div>
      </a>
    </div>
  </div>
</section>


<section className="py-32 max-w-5xl mx-auto">
  <div className="container">
    <p className="mb-4 text-sm text-zinc-600 lg:text-base">OUR VALUES</p>
    <h2 className="text-3xl font-medium lg:text-4xl">Why Choose Us?</h2>
    <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
      <a href='/dictionary' className="rounded-lg bg-foreground/10 hover:scale-95 hover:shadow-2xl hover:shadow-foreground/10 transition p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-timer size-6">
            <line x1="10" x2="14" y1="2" y2="2"></line>
            <line x1="12" x2="15" y1="14" y2="11"></line>
            <circle cx="12" cy="14" r="8"></circle>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Dictionary</h3>
        <p className="leading-7 text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </a>
      <a href='/translate' className="rounded-lg bg-foreground/10 hover:scale-95 hover:shadow-2xl hover:shadow-foreground/10 transition p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-zoom-in size-6">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
            <line x1="11" x2="11" y1="8" y2="14"></line>
            <line x1="8" x2="14" y1="11" y2="11"></line>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Translation</h3>
        <p className="leading-7 text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </a>
      <a href='/chat/intro' className="rounded-lg bg-foreground/10 hover:scale-95 hover:shadow-2xl hover:shadow-foreground/10 transition p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-zap size-6">
            <path
              d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
            </path>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Innovation</h3>
        <p className="leading-7 text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </a>
    </div>
  </div>
</section>

    </div>
  )
}
