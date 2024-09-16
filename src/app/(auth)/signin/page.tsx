import React from 'react'

const Page = () => {
  return (
    <div>
      
      <section className="py-32 h-screen mx-auto flex items-center justify-center max-sm:p-4">
  <div>
    <div className="flex flex-col gap-4">
      <a href='/'><img src="/logo.svg" alt="logo" className="h-8 dark:hidden" /><img src="/logo-dark.svg" alt="logo" className="h-8 light:hidden" /></a>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto w-full max-w-md">
        <div className="flex flex-col space-y-1.5 p-6 items-center">

          <h3 className="font-semibold tracking-tight text-xl">Sign Up</h3>
          <p className="text-sm   text-zinc-600 dark:text-gray-200 dark:text-zinc-100">Enter your information to create an account</p>
        </div>
        <div className="p-6 pt-0">
          <div className="grid gap-4">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 text-background h-10 px-4 py-2 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                className="lucide lucide-globe mr-2 size-4">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>Sign up with Google
            </button>
            <div className="flex items-center gap-4">
              <span className="h-px w-full bg-gray-100"></span><span className="text-xs   text-zinc-600 dark:text-gray-200 dark:text-zinc-100">OR</span><span
                className="h-px w-full bg-gray-100"></span>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email">Email</label><input type="email"
                className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:  text-zinc-600 dark:text-gray-200 dark:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="email" placeholder="m@example.com" required={true} />
            </div>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full"
              type="submit">
              <a href='/dashboard'>Create an account</a>
            </button>
          </div>
          <div className="mt-4 text-sm   text-zinc-600 dark:text-gray-200 dark:text-zinc-100">
            By continuing, you&#x27;re agreeing to our<a href="#" className="ml-1 underline hover:text-gray-800">Terms and
              Privacy Policy.</a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex gap-1 text-sm">
        <p>Already have an account?</p>
        <a href="#" className="underline">Log in</a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Page
