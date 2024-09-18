"use client";
import React, { useState } from "react";
import {
  BookAIcon,
  BookTextIcon,
  HeartIcon,
  LanguagesIcon
} from "lucide-react";
import { Input } from "@/components/ui/input";
export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-4xl mx-auto lg:py-36 sm:pb-12">
      <section>
        <div className="container">
          <a href="/talk/demo" className="text-4xl font-medium md:text-6xl">
            Talk with AI
          </a>
          <p className="mt-6 text-zinc-600 md:mb-20 md:text-lg">
            Artificial Intelligence.
          </p>
          <div className="mt-12 md:mt-20">
            <h3 className="mb-8 text-3xl font-medium md:text-4xl">
              Conversation
            </h3>
            <ul className="divide-y divide-border  border-y border-border">
              <li className="group">
                <a href="#" className="flex items-center py-6">
                  <div>
                    <div className="font-medium md:text-lg">Topic</div>
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
                    <div className="font-medium md:text-lg">HSK Level</div>
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
                    <div className="font-medium md:text-lg">Duration</div>
                    <input className="text-3xl text-zinc-600 mt-4 w-full border-b-2 outline-none border-foreground/50" />
                  </div>
                  <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">
                    &rarr;
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-20">
            <h3 className="mb-8 text-3xl font-medium md:text-4xl">
              Vocabulary
            </h3>
            <ul className="divide-y divide-border  border-y border-border">
              <li className="group">
                <a href="#" className="flex items-center py-6">
                  <div>
                    <div className="font-medium md:text-lg">Open Notebooks</div>
                    <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">
                      Choose your included Vocabulary
                    </div>
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

      <section>
        <ul className="divide-y divide-border  border-y border-border">
          <aside>
            <h3 className="mb-8 text-3xl font-medium md:text-4xl">
              Orochi Maru
            </h3>
            <li className="flex gap-8 py-4">
              <img
                src="/avatar-2.svg"
                className="relative mt-4 flex shrink-0 overflow-hidden rounded-full size-8 border  lg:size-24 bg-red-300"
              />
              <a
                href="#"
                className="flex flex-1 items-center py-6 gap-12 flex-col"
              >
                <div className="flex justify-between w-full group">
                  <aside>
                    <div className="font-medium md:text-lg">今天你很爱我，我是你的好朋友</div>
                    <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">
                      Jintian Ni hen aiwo, wo shi ni de hao pengyou
                    </div>
                  </aside>
                  <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">
                    &rarr;
                  </div>
                </div>

                <div className="flex justify-between w-full group">
                  <aside>
                    <div className="font-medium md:text-lg">
                      按”字是一个形声字，本义是用手向下压或气。该字左边为 来引申为控制，抑止
                    </div>
                    <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">
                      Jdàibiǎo zìyì: Bù biān wèi “ān dàibiǎo zìyì: Bù biān wèi
                      “ān
                    </div>
                  </aside>
                  <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">
                    &rarr;
                  </div>
                </div>

                <div className="flex justify-between w-full group">
                  <aside>
                    <div className="font-medium md:text-lg">
                      (手)，代表字义: 布边为“安，
                    </div>
                    <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">
                      Zài xiàndài zhòngshì chuàng
                    </div>
                  </aside>
                  <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">
                    &rarr;
                  </div>
                </div>
              </a>
            </li>
          </aside>

          <aside>
            <h3 className="mb-8 text-3xl font-medium md:text-4xl text-end">
              Naruke tamin
            </h3>
            <li className="flex gap-8 items-center py-4">
              <a href="#" className="flex flex-1 items-center py-6">
                <div className="flex justify-between w-full group">
                  <div className="lucide lucide-arrow-right mr-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">
                    &larr;
                  </div>
                  <aside>
                    <div className="font-medium md:text-lg">
                      (手)，代表字义: 布边为“安，
                    </div>
                    <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">
                      Zài xiàndài zhòngshì chuàng
                    </div>
                  </aside>
                </div>
              </a>
              <img
                src="/avatar-1.svg"
                className="relative flex shrink-0 overflow-hidden rounded-full size-8 border  lg:size-24 bg-red-300"
              />
            </li>
          </aside>

          <aside>
            <h3 className="mb-8 text-3xl font-medium md:text-4xl">
              Orochi Maru
            </h3>
            <li className="flex gap-8 py-4">
              <img
                src="/avatar-2.svg"
                className="relative mt-4 flex shrink-0 overflow-hidden rounded-full size-8 border  lg:size-24 bg-red-300"
              />
              <a
                href="#"
                className="flex flex-1 items-center py-6 gap-12 flex-col"
              >
                <div className="flex justify-between w-full group">
                  <aside>
                    <div className="font-medium md:text-lg">
                      今天我是你的 你很爱我，我是你的好朋友
                    </div>
                    <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">
                      Ni hen shi ni de hao p, wo shi ni de hao pengyou
                    </div>
                  </aside>
                  <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">
                    &rarr;
                  </div>
                </div>

                <div className="flex justify-between w-full group">
                  <aside>
                    <div className="font-medium md:text-lg">很爱我，我 今天你是你的好友</div>
                    <div className="text-xs text-zinc-600 md:mt-2 md:text-sm">
                      hen ni de hao pengyou
                    </div>
                  </aside>
                  <div className="lucide lucide-arrow-right ml-auto size-6 -tranzinc-x-6 opacity-0 transition-all group-hover:tranzinc-x-0 transistion duration-300 group-hover:opacity-100 text-3xl text-thin">
                    &rarr;
                  </div>
                </div>
              </a>
            </li>
          </aside>
        </ul>
      </section>
    </div>
  );
}
