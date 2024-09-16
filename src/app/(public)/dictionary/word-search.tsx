import React from 'react'

export default function WordSearch() {
  return (
    <div>
      
      <section>
  <div className="relative">
    <div className="mx-auto flex w-full text-left">
      <div className="relative mx-auto flex-col items-center">
        <div className="inline-flex items-center text-left">
          <div className="relative mx-auto items-center lg:inline-flex">
            <div className="items-start text-left lg:inline-flex">
              <div className="lg:pr-16">
                <h1
                  className="mb-8 flex max-w-6xl text-4xl font-semibold tracking-tight md:max-w-3xl md:text-6xl">
                  Search any Chinese Character
                </h1>
              </div>
              <div>
                <p className="flex max-w-3xl text-lg leading-relaxed  ">
                  Wenzi offers a wide array of both free and premium
                  components specifically designed for Tailwind CSS.
                </p>
                <div>
                  <form action="" method="post" id="revue-form" name="revue-form"
                    className="mt-8 rounded-2xl border bg-foreground/10 p-2 transition duration-500 ease-in-out sm:flex sm:max-w-lg">
                    <div className="min-w-0 flex-1">
                      <label htmlFor="member_email" className="sr-only">Email address</label>
                      <input id="cta-email" type="email"
                        className="block w-full rounded-md border border-transparent bg-transparent px-5 py-3 text-base transition duration-500 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        placeholder="What word to search?" />
                    </div>
                    <div className="mt-4 sm:ml-3 sm:mt-0">
                      <button type="submit" value="Subscribe" name="member[subscribe]" id="member_submit"
                        className="block w-full rounded-xl border border-transparent bg-red-500 px-5 py-3 text-base font-medium text-white shadow hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10">Look up</button>
                    </div>
                  </form>
                  <div className="sm:flex sm:max-w-lg">
                    <p className="mt-3 text-xs  ">
                      By subscribing, you agree with Wenzi
                      <a className="underline" href="#">Terms of Service</a>
                      and
                      <a className="underline" href="#">Privacy Policy</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center rounded-lg py-24">
          <img className="w-full rounded-xl object-cover object-center" alt="hero"
            src="/topic-6.svg" />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
