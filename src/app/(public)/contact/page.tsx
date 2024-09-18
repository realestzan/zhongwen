'use client'
import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";


export default function ContactPage() {


const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto lg:py-36 sm:pb-12">
    <section>
      <div className="container">
        <h1 className="text-4xl font-medium md:text-6xl">
          Contact Us
        </h1>
        <p className="mt-6 text-zinc-600 md:mb-20 md:text-lg">
            Get help for any issues or questions
        </p>
        <div className="mt-12 md:mt-20">
          <h3 className="mb-8 text-3xl font-medium md:text-4xl">
            Fill in 
          </h3>
          <ul className="divide-y divide-border  border-y border-border">
            <li className="group">
              <a href="#" className="flex items-center py-6">
                <div>
                  <div className="font-medium md:text-lg">Issue</div>
                  <input className="text-3xl text-zinc-600 mt-4 w-full border-b-2 outline-none border-foreground/50" />
                </div>
                <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">
                  &rarr;
                </div>
              </a>
            </li>
            <li className="group">
              <a href="#" className="flex items-center py-6">
                <div>
                  <div className="font-medium md:text-lg">Description</div>
                  <input className="text-3xl text-zinc-600 mt-4 w-full border-b-2 outline-none border-foreground/50" />
                </div>
                <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">
                  &rarr;
                </div>
              </a>
            </li>
            <li className="group">
              <a href="#" className="flex items-center py-6">
                <div>
                  <div className="font-medium md:text-lg">Topic</div>
                  {/* <input className="text-3xl text-zinc-600 mt-4 w-full border-b-2 outline-none border-foreground/50" /> */}



    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-foreground text-background rounded-md mt-8 px-4 py-2 flex items-center gap-4"
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
       {/* {isOpen && (  */}
        <>
         <motion.li variants={itemVariants}>Item 1 </motion.li>
         <motion.li variants={itemVariants}>Item 2 </motion.li>
         <motion.li variants={itemVariants}>Item 3 </motion.li>
         <motion.li variants={itemVariants}>Item 4 </motion.li>
         <motion.li variants={itemVariants}>Item 5 </motion.li>
         </>
       {/* )} */}
       </motion.ul>
    </motion.nav>



                </div>
                <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">
                  &rarr;
                </div>
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </section>  
      


    <section className="py-12">
  <div className="container">
    <p className="mb-4 text-sm text-zinc-600 lg:text-base">OPEN THREAD</p>
    <h2 className="text-3xl font-medium lg:text-4xl">Archived Issue:</h2>
    <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
      <div className="rounded-lg bg-foreground/10 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-timer size-6">
            <line x1="10" x2="14" y1="2" y2="2"></line>
            <line x1="12" x2="15" y1="14" y2="11"></line>
            <circle cx="12" cy="14" r="8"></circle>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Performance</h3>
        <p className="leading-7 text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </div>
      <div className="rounded-lg bg-foreground/10 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-zoom-in size-6">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
            <line x1="11" x2="11" y1="8" y2="14"></line>
            <line x1="8" x2="14" y1="11" y2="11"></line>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Quality</h3>
        <p className="leading-7 text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </div>
      <div className="rounded-lg bg-foreground/10 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-zap size-6">
            <path
              d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
            </path>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Innovation</h3>
        <p className="leading-7 text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="py-12">
  <div className="container">
    <p className="mb-4 text-sm text-zinc-600 lg:text-base">OPEN THREAD</p>
    <h2 className="text-3xl font-medium lg:text-4xl">May be you look for?</h2>
    <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
      <div className="rounded-lg bg-foreground/10 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-timer size-6">
            <line x1="10" x2="14" y1="2" y2="2"></line>
            <line x1="12" x2="15" y1="14" y2="11"></line>
            <circle cx="12" cy="14" r="8"></circle>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Performance</h3>
        <p className="leading-7 text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </div>
      <div className="rounded-lg bg-foreground/10 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-zoom-in size-6">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
            <line x1="11" x2="11" y1="8" y2="14"></line>
            <line x1="8" x2="14" y1="11" y2="11"></line>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Quality</h3>
        <p className="leading-7 text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </div>
      <div className="rounded-lg bg-foreground/10 p-5">
        <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-background"><svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            className="lucide lucide-zap size-6">
            <path
              d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
            </path>
          </svg></span>
        <h3 className="mb-2 text-xl font-medium">Innovation</h3>
        <p className="leading-7 text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt beatae tenetur totam aut
          blanditis ipsa quaerat neque eaque, atque doloremque! Eligendi.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
