import { Button } from '@/components/ui/button';
import React from 'react'

export default function Page() {
    const links = [
        { label: "Onboarding", href: "/dictionary" },
        { label: "Pricing", href: "/dictionary" },



        { label: "Blogs", href: "/blogs" },
        { label: "Blog", href: "/blog" },
        { label: "BlogRead", href: "/blog/read" },



        { label: "Signin", href: "/dictionary" },
        { label: "Signup", href: "/dictionary" },



        
        { label: "Dictionary", href: "/dictionary" },
        { label: "DictionaryEntry", href: "/dictionary/entry" },
        { label: "Translator", href: "/translate" },




        { label: "Chat", href: "/chat" },
        { label: "ChatIntro", href: "/chat/intro" },
        { label: "ChatEntry", href: "/chat/demo" },




        { label: "Vocabulary", href: "/vocabulary" },
        { label: "VCPractice", href: "/vocabulary/practice" },
        { label: "VCHistory", href: "/vocabulary/history" },
        { label: "Notebook", href: "/notebook" },
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
