export default function Custom404() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 text-black h-[80vh]">
          <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Go back home
              </a>
              <a href="#" className="text-sm font-semibold">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  