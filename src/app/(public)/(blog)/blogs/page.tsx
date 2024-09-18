import React from 'react'

const Page = () => {
  return (
    <div className='mx-auto max-w-7xl flex flex-col gap-36 py-24 lg:p-8 md:p-4 sm:p-0 '>
      




<section className='max-w-7xl mx-auto'>
  <div>
    <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
      <div>
        <p className="mb-6 text-xs font-medium uppercase tracking-wider">Tag Line</p>
        <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">Gallery</h2>
        <a href="#" className="group flex items-center text-xs font-medium md:text-base lg:text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-arrow-right ml-2 size-4 transition-transform group-hover:translate-x-1">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg></a>
      </div>
      <div className="mt-8 flex shrink-0 items-center justify-center gap-2">
        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 border  border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 disabled:pointer-events-auto"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-arrow-left size-5">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg></button><button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 border  border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 disabled:pointer-events-auto"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
            className="lucide lucide-arrow-right size-5">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div className="w-full">
    <div className="relative" role="region" aria-roledescription="carousel">
      <div className="overflow-hidden">
        <div
          className="flex ml-[calc(p-4-20px)] mr-[calc(p-4)] 2xl:ml-[calc(50vw-700px+p-4-20px)] 2xl:mr-[calc(50vw-700px+p-4)]">
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 basis-full pl-[20px] md:max-w-[452px]">
            <a href="#" className="group flex flex-col justify-between">
              <div>
                <div className="flex aspect-[3/2] text-clip rounded-xl">
                  <div className="flex-1">
                    <div className="relative f origin-bottom transition duration-300 group-hover:scale-105">
                      <video autoPlay muted loop src="/video-3.mp4"
                        className="object-cover object-center" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mt-12 mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                Duis sem sem, gravida vel porttitor eu, volutpat ut arcu
              </div>
              <div className="mb-8 line-clamp-2 text-sm text-gray-600 md:mb-12 md:text-base lg:mb-9">
                Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare
                quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.
              </div>
              <div className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
                  className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 basis-full pl-[20px] md:max-w-[452px]">
            <a href="#" className="group flex flex-col justify-between">
              <div>
                <div className="flex aspect-[3/2] text-clip rounded-xl">
                  <div className="flex-1">
                    <div className="relative f origin-bottom transition duration-300 group-hover:scale-105">
                      <video autoPlay muted loop src="/video-4.mp4"
                        className=" object-cover object-center" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mt-12 mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                Duis sem sem, gravida vel porttitor eu, volutpat ut arcu
              </div>
              <div className="mb-8 line-clamp-2 text-sm text-gray-600 md:mb-12 md:text-base lg:mb-9">
                Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare
                quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.
              </div>
              <div className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
                  className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 basis-full pl-[20px] md:max-w-[452px]">
            <a href="#" className="group flex flex-col justify-between">
              <div>
                <div className="flex aspect-[3/2] text-clip rounded-xl">
                  <div className="flex-1">
                    <div className="relative f origin-bottom transition duration-300 group-hover:scale-105">
                      <video autoPlay muted loop src="/video-5.mp4"
                        className=" object-cover object-center" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mt-12 mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                Duis sem sem, gravida vel porttitor eu, volutpat ut arcu
              </div>
              <div className="mb-8 line-clamp-2 text-sm text-gray-600 md:mb-12 md:text-base lg:mb-9">
                Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare
                quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.
              </div>
              <div className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
                  className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 basis-full pl-[20px] md:max-w-[452px]">
            <a href="#" className="group flex flex-col justify-between">
              <div>
                <div className="flex aspect-[3/2] text-clip rounded-xl">
                  <div className="flex-1">
                    <div className="relative f origin-bottom transition duration-300 group-hover:scale-105">
                      <video autoPlay muted loop src="/video-6.mp4"
                        className=" object-cover object-center" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mt-12 mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                Duis sem sem, gravida vel porttitor eu, volutpat ut arcu
              </div>
              <div className="mb-8 line-clamp-2 text-sm text-gray-600 md:mb-12 md:text-base lg:mb-9">
                Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare
                quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.
              </div>
              <div className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
                  className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
          <div role="group" aria-roledescription="slide"
            className="min-w-0 shrink-0 grow-0 basis-full pl-[20px] md:max-w-[452px]">
            <a href="#" className="group flex flex-col justify-between">
              <div>
                <div className="flex aspect-[3/2] text-clip rounded-xl">
                  <div className="flex-1">
                    <div className="relative f origin-bottom transition duration-300 group-hover:scale-105">
                      <video autoPlay muted loop src="/video-7.mp4"
                        className=" object-cover object-center" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mt-12 mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                Duis sem sem, gravida vel porttitor eu, volutpat ut arcu
              </div>
              <div className="mb-8 line-clamp-2 text-sm text-gray-600 md:mb-12 md:text-base lg:mb-9">
                Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare
                quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.
              </div>
              <div className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin ="round"
                  className="lucide lucide-arrow-right ml-2 size-5 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>










<section className='max-w-7xl mx-auto'>
  <div>
    <div className="pb-4">
      <h3 className="text-xl font-semibold leading-6 text-gray-800">
        Latest Entries
      </h3>
    </div>

    <div className="relative mx-auto ">
      <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-2">
        <div className="mb-12 flex cursor-pointer flex-col overflow-hidden">
          <a href="/blog-post">
            <div className="shrink-0">
              <video autoPlay loop muted className="h-48 w-full rounded-lg object-cover" src="/video-8.mp4" />
            </div>
          </a>
          <div className="flex flex-1 flex-col justify-between">
            <a href="/blog-post"></a>
            <div className="flex-1">
              <a href="/blog-post">
                <div className="flex space-x-1 pt-6 text-sm  ">
                  <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                  <span aria-hidden="true"> · </span>
                  <span> 4 min read </span>
                </div>
              </a>
              <a href="#" className="mt-2 block space-y-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tighter text-gray-600">
                  Typography on app.
                </h3>
                <p className="text-lg font-normal  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  facilis asperiores porro quaerat doloribus, eveniet dolore.
                  Adipisci tempora aut inventore optio animi.
                </p>
                <div className="mt-6 flex items-center">
                  <div>
                    <img alt="avatar" className="inline-block size-9 rounded-full" src="/logo-dark.svg"/>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-600">
                      Jazz Torp
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mb-12 flex cursor-pointer flex-col overflow-hidden">
            <a href="/blog-post">
              <div className="shrink-0">
                <video autoPlay loop muted className="h-48 w-full rounded-lg object-cover" src="/video-5.mp4" />
              </div>
            </a>
            <div className="flex flex-1 flex-col justify-between">
              <a href="/blog-post"></a>
              <div className="flex-1">
                <a href="/blog-post">
                  <div className="flex space-x-1 pt-6 text-sm  ">
                    <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                    <span aria-hidden="true"> · </span>
                    <span> 4 min read </span>
                  </div>
                </a>
                <a href="#" className="mt-2 block space-y-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tighter text-gray-600">
                    Typography on app.
                  </h3>
                  <p className="text-lg font-normal  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asperiores.
                  </p>

                  <div className="mt-6 flex items-center">
                    <div>
                      <img alt="avatar" className="inline-block size-9 rounded-full" src="/logo-dark.svg"
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-600">
                        Robert Zox
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="mb-12 flex cursor-pointer flex-col overflow-hidden">
            <a href="/blog-post">
              <div className="shrink-0">
                <video autoPlay loop muted className="h-48 w-full rounded-lg object-cover" src="/video-1.mp4" />
              </div>
            </a>
            <div className="flex flex-1 flex-col justify-between">
              <a href="/blog-post"></a>
              <div className="flex-1">
                <a href="/blog-post">
                  <div className="flex space-x-1 pt-6 text-sm  ">
                    <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                    <span aria-hidden="true"> · </span>
                    <span> 4 min read </span>
                  </div>
                </a>
                <a href="#" className="mt-2 block space-y-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tighter text-gray-600">
                    Typography on app.
                  </h3>
                  <p className="text-lg font-normal  ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asperiores.
                  </p>

                  <div className="mt-6 flex items-center">
                    <div>
                      <img alt="avatar" className="inline-block size-9 rounded-full" src="/logo-dark.svg"
                       />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-gray-600">
                        Thomas Narrow
                      </p>
                    </div>
                  </div>
                </a>
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

export default Page
