import React from 'react'

export default function Page() {
  return (
    <div>

<section>
    <h2 className="text-4xl font-medium md:text-6xl">Profile</h2>
    <p className="mt-6 text-zinc-600 md:mb-20 md:text-lg">Config As You Want.</p>
    <div className="mt-12 md:mt-20">
      <h3 className="mb-8 text-3xl font-medium md:text-4xl">Account</h3>
      <ul className="divide-y divide-border  border-y border-border">
        <li className="group">
          <a href="#" className="flex items-center py-6">
            <div>
              <div className="font-medium md:text-lg">Nickname</div>
              <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">@Realestzan</div>
            </div>
            <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
          </a>
        </li>
        <li className="group">
          <a href="#" className="flex items-center py-6">
            <div>
              <div className="font-medium md:text-lg">Email | Phone</div>
              <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">franbow1177@gmail.com | 0949010705 </div>
            </div>
            <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
          </a>
        </li>
        <li className="group">
          <a href="#" className="flex items-center py-6">
            <div>
              <div className="font-medium md:text-lg">Password</div>
              <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">************</div>
            </div>
            <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
          </a>
        </li>
      </ul>
    </div>
    <div className="mt-12 md:mt-20">
      <h3 className="mb-8 text-3xl font-medium md:text-4xl">Linked Account</h3>
      <ul className="divide-y divide-border  border-y border-border">
        <li className="group">
          <a href="#" className="flex items-center py-6">
            <div>
              <div className="font-medium md:text-lg">Google</div>
              <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">23:40 23/03/2004</div>
            </div>
            <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
          </a>
        </li>
      </ul>
    </div>



    <div className="mt-12 md:mt-20">
      <h3 className="mb-8 text-3xl font-medium md:text-4xl">Subscription</h3>
      <ul className="divide-y divide-border  border-y border-border">
        <li className="group">
          <a href="#" className="flex items-center py-6">
            <div>
              <div className="font-medium md:text-lg">250USD / Month</div>
              <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">Next Charge: 23 days left</div>
            </div>
            <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
          </a>
        </li>
      </ul>
    </div>




    <div className="mt-12 md:mt-20">
      <h3 className="mb-8 text-3xl font-medium md:text-4xl">Account Status</h3>
      <ul className="divide-y divide-border  border-y border-border">
        <li className="group">
          <a href="#" className="flex items-center py-6">
            <div>
              <div className="font-medium md:text-lg text-gray-500">Archived Account</div>
              <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">Subscriptions will freeze</div>
            </div>
            <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
          </a>

          <a href="#" className="flex items-center py-6">
            <div>
              <div className="font-medium md:text-lg text-red-500">Delete Account</div>
              <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">You can't change this once done</div>
            </div>
            <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">&rarr;</div>
          </a>
        </li>
      </ul>
    </div>



</section>


    </div>
  )
}
