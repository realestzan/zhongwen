export default function Page() {
  return (

         


        <main>           <section>
  <div className="container max-w-7xl">
    {/* <h2 className="text-3xl font-medium lg:text-4xl">A better way to build websites</h2> */}
    <div className="grid gap-9 lg:grid-cols-2">
      <div className="flex flex-col justify-between rounded-lg bg-zinc-100 dark:bg-red-500/10 hover:scale-95 transition">
        <div className="flex justify-between gap-10 border-b">
          <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
            <p className="text-xs text-zinc-600">FOR DESIGNERS</p>
            <h3 className="text-2xl md:text-4xl">Built for artists and designers</h3>
          </div>
          <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
            <img src="/topic-3.svg" alt="placeholder" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="p-4 text-zinc-600 md:p-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore
          quis facilis molestias!
        </div>
      </div>
      <div className="flex flex-col justify-between rounded-lg bg-zinc-100 dark:bg-red-500/10 hover:scale-95 transition">
        <div className="flex justify-between gap-10 border-b">
          <div className="flex flex-col justify-between gap-14 py-6 pl-4 md:py-10 md:pl-8 lg:justify-normal">
            <p className="text-xs text-zinc-600">FOR DEVELOPERS</p>
            <h3 className="text-2xl md:text-4xl">Built for coders and developers</h3>
          </div>
          <div className="md:1/3 w-2/5 shrink-0 rounded-r-lg border-l">
            <img src="/topic-2.svg" alt="placeholder" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="p-4 text-zinc-600 md:p-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima doloribus illum, labore
          quis facilis molestias!
        </div>
      </div>
    </div>
  </div>
</section> 




</main>


  
  )
}
