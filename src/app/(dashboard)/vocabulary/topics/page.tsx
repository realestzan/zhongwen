import React from 'react'

export default function Page() {
  return (
    <div>
      

      <section>
  <div className="container max-w-7xl">
    {/* <div className="mb-10 flex flex-col items-center gap-6 md:mb-20">
      <div
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
        Badge
      </div>
      <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
        This is where your features go
      </h2>
    </div> */}
    <div className="relative w-full" role="region" aria-roledescription="carousel">
      <div className="mb-4 flex justify-between px-1 md:mb-5">
        <p className="font-medium">Rules</p>
        <div className="flex items-center space-x-2">
          <div className="mr-2 hidden items-center gap-3 text-xs text-gray-600 md:flex">
            <span>01</span>
            {/* <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100"
              className="relative overflow-hidden rounded-full bg-secondary h-[2px] w-52">
              <div
  data-state="indeterminate"
  data-max="100"
  className="h-full w-full flex-1 bg-black transition-all"
  style={{ transform: 'translateX(-86%)' }}
></div>
              </div>  */}
            <span>0 - 7</span>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full -left-12 top-1/2 static translate-y-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              className="lucide lucide-arrow-left h-4 w-4">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg><span className="sr-only">Previous slide</span></button><button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8 rounded-full -right-12 top-1/2 static translate-y-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              className="lucide lucide-arrow-right h-4 w-4">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg><span className="sr-only">Next slide</span>
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="flex -ml-4 flex-wrap">
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col justify-center p-6">
                  <div className="">
                    <span className="mb-5 flex size-8 items-center justify-center rounded-full bg-accent lg:size-10"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-code size-4">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg></span>
                    <p className="text-xl font-semibold md:text-2xl lg:text-2xl">Integrations</p>
                    <p className="pt-2 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quae!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col justify-center p-6">
                  <div className="">
                    <span className="mb-5 flex size-8 items-center justify-center rounded-full bg-accent lg:size-10"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-arrow-up-down size-4">
                        <path d="m21 16-4 4-4-4"></path>
                        <path d="M17 20V4"></path>
                        <path d="m3 8 4-4 4 4"></path>
                        <path d="M7 4v16"></path>
                      </svg></span>
                    <p className="text-xl font-semibold md:text-2xl lg:text-2xl">Automation</p>
                    <p className="pt-2 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quae!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col justify-center p-6">
                  <div className="">
                    <span className="mb-5 flex size-8 items-center justify-center rounded-full bg-accent lg:size-10"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-redo size-4">
                        <path d="M21 7v6h-6"></path>
                        <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path>
                      </svg></span>
                    <p className="text-xl font-semibold md:text-2xl lg:text-2xl">Customization</p>
                    <p className="pt-2 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quae!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col justify-center p-6">
                  <div className="">
                    <span className="mb-5 flex size-8 items-center justify-center rounded-full bg-accent lg:size-10"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-arrow-down-to-line size-4">
                        <path d="M12 17V3"></path>
                        <path d="m6 11 6 6 6-6"></path>
                        <path d="M19 21H5"></path>
                      </svg></span>
                    <p className="text-xl font-semibold md:text-2xl lg:text-2xl">Collaboration</p>
                    <p className="pt-2 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quae!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col justify-center p-6">
                  <div className="">
                    <span className="mb-5 flex size-8 items-center justify-center rounded-full bg-accent lg:size-10"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-repeat size-4">
                        <path d="m17 2 4 4-4 4"></path>
                        <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                        <path d="m7 22-4-4 4-4"></path>
                        <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                      </svg></span>
                    <p className="text-xl font-semibold md:text-2xl lg:text-2xl">Security</p>
                    <p className="pt-2 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quae!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col justify-center p-6">
                  <div className="">
                    <span className="mb-5 flex size-8 items-center justify-center rounded-full bg-accent lg:size-10"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-scan size-4">
                        <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                        <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                        <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                        <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                      </svg></span>
                    <p className="text-xl font-semibold md:text-2xl lg:text-2xl">Performance</p>
                    <p className="pt-2 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quae!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 pl-4 basis-full md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col justify-center p-6">
                  <div className="">
                    <span className="mb-5 flex size-8 items-center justify-center rounded-full bg-accent lg:size-10"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-scaling size-4">
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M14 15H9v-5"></path>
                        <path d="M16 3h5v5"></path>
                        <path d="M21 3 9 15"></path>
                      </svg></span>
                    <p className="text-xl font-semibold md:text-2xl lg:text-2xl">Scalability</p>
                    <p className="pt-2 text-gray-600">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quae!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 



    </div>
  )
}
