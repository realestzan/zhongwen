import { Button } from '@/components/ui/button';
import { LanguagesIcon } from 'lucide-react';
import React from 'react'

export default function Page() {
    const links = [
        { label: "Onboarding", href: "/dictionary", icon: LanguagesIcon },
        { label: "Pricing", href: "/dictionary", icon: LanguagesIcon },
        { label: "Contact", href: "/contact", icon: LanguagesIcon },



        { label: "Blogs", href: "/blogs", icon: LanguagesIcon },
        { label: "Blog", href: "/blog", icon: LanguagesIcon },
        { label: "BlogRead", href: "/blog/read", icon: LanguagesIcon },




        { label: "Story", href: "/story", icon: LanguagesIcon },
        { label: "Chat", href: "/chat/", icon: LanguagesIcon },
        { label: "Chat Entry", href: "/chat/entry", icon: LanguagesIcon },



        { label: "Signin", href: "/signin", icon: LanguagesIcon },
        { label: "Signup", href: "/signup", icon: LanguagesIcon },



        
        { label: "Dictionary", href: "/dictionary", icon: LanguagesIcon },
        { label: "DictionaryEntry", href: "/dictionary/entry", icon: LanguagesIcon },
        { label: "Translator", href: "/translate", icon: LanguagesIcon },




        { label: "Chat", href: "/ai", icon: LanguagesIcon },
        { label: "ChatIntro", href: "/chat/intro", icon: LanguagesIcon },
        { label: "ChatEntry", href: "/chat/entry", icon: LanguagesIcon },


        { label: "Vocabulary", href: "/vocabulary", icon: LanguagesIcon },
        { label: "Practice", href: "/vocabulary/practice", icon: LanguagesIcon },
        { label: "History", href: "/vocabulary/history", icon: LanguagesIcon },
        { label: "Notebook", href: "/vocabulary/notebook", icon: LanguagesIcon },
        { label: "Words", href: "/vocabulary/word", icon: LanguagesIcon },
      ];

      
  return (
    <div className='mx-auto my-[20vh] text-center flex items-center justify-center gap-8 flex-wrap max-w-6xl'>
        
        {links.map((link, index) => (
            <Button key={index} variant={'link'} >
                <a
              key={link.href}
              href={link.href}
              className="text-3xl font-semibold leading-6 hover:text-red-500 transition duration-300"
            >
              {link.label}
            </a>
            </Button>
          ))}


    </div>
  )
}
