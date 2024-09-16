'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { ALargeSmallIcon, BookOpenTextIcon } from 'lucide-react'
import { ModeToggle } from '../toggle-theme'

const feature = [
  { name: 'Vocabulary', description: 'Get a better understanding of your traffic', href: '/vocabulary', icon: ChartPieIcon },
  { name: 'Practice', description: 'Speak directly to your customers', href: '/vocabulary/practice', icon: CursorArrowRaysIcon },
  { name: 'History', description: 'Your customers’ data will be safe and secure', href: '/vocabulary/history', icon: FingerPrintIcon },
  { name: 'Account', description: 'Connect with third-party tools', href: '/dashboard', icon: SquaresPlusIcon },
]
const featureActions = [
  { name: 'Grammar', href: '/grammar', icon: BookOpenTextIcon },
  { name: 'Vocabulary', href: '/vocabulary', icon: ALargeSmallIcon },
]

const other = [
  { name: 'Blogs', description: 'Get a better understanding of your traffic', href: '/', icon: ChartPieIcon },
  { name: 'Pricing', description: 'Get a better understanding of your traffic', href: '/pricing', icon: ChartPieIcon },
]
const otherActions = [
  { name: 'Sign in', href: '/signin', icon: PlayCircleIcon },
  { name: 'Sign up', href: '/signup', icon: PhoneIcon },
]

export default function Header() {
  const links = [
    { label: 'Dictionary', href: '/dictionary' },
    { label: 'Chat AI', href: '/chat/intro' },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-background text-foreground z-20">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src="/logo.svg" className="h-12 w-auto dark:hidden" />
            <img alt="" src="/logo-dark.svg" className="h-12 w-auto hidden dark:block" />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6">
              Feature
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {feature.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-foreground/10"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-foreground/10 group-hover:bg-background">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-red-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}




              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-foreground/10">
                {featureActions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 hover:bg-foreground/10"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="text-sm font-semibold leading-6"
      >
        {link.label}
      </a>
    ))}

<Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6">
              Other
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-background shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {other.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-foreground/10"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-foreground/10 group-hover:bg-background">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-red-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}

<div
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-foreground/10"
                  >
                    <ModeToggle />
                      <div className="block font-semibold">
                        Toggle Theme
                      </div>
                  </div>
              </div>
              
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-foreground/10">
                {otherActions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 hover:bg-foreground/10"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
              
            </PopoverPanel>
          </Popover>

        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/signin" className="text-sm font-semibold leading-6">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/logo.svg"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-foreground/100/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-foreground/10">
                    Feature
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...feature, ...featureActions].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-foreground/10"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                    
                  </DisclosurePanel>
                </Disclosure>
                

<Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-foreground/10">
                    Other
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...other, ...otherActions].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 hover:bg-foreground/10"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                    
                  </DisclosurePanel>
                </Disclosure>
                
                {links.map((link) => (
      <a
        key={link.href}
        href={link.href}
        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-foreground/10"
      >
        {link.label}
      </a>
    ))}

    
    <div className='flex w-full justify-between py-2'><h1>Toggle Mode</h1><ModeToggle /></div>


              </div>

              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-foreground/10"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
