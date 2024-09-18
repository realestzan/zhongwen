"use client";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { DictionaryEntry } from "@/utils/types";
import {
  Dialog,
  Button,
  DialogTitle,
  DialogDescription,
  Label,
  Input
} from "@headlessui/react";
import {
  DialogTrigger,
  DialogContent,
  DialogClose
} from "@radix-ui/react-dialog";
import React, { useEffect, useState } from "react";
            import DictionaryDetail from "./dictionary-detail";
import { useSearchParams } from "next/navigation";

const DictionaryClient = ({ id }: {id : string}) => {
  const [dictionary, setDictionary] = useState<"cedict" | "stardict" | "all">(
    "cedict"
  );
  const [query, setQuery] = useState("汉");
  const [stardictResults, setStardictResults] = useState<DictionaryEntry[]>([]);
  const [cedictResults, setCedictResults] = useState<DictionaryEntry[]>([]);

  const handleStardictSearch = async () => {
    const res = await fetch(`/api/dictionary/stardict?query=${query}`);
    const data: DictionaryEntry[] = await res.json();
    setStardictResults(data);
  };

  const handleCedictSearch = async () => {
    const res = await fetch(`/api/dictionary/cedict?query=${query}`);
    const data: DictionaryEntry[] = await res.json();
    setCedictResults(data);
  };

  const handleSearch = async () => {
    handleCedictSearch();
    handleStardictSearch();
  };

  
  useEffect(() => { 
    if (id) { 
      setQuery(id);
      setTimeout(() => {
        handleSearch();
      }, 3000)
    }
  }, [])

  return (
    <div>
      <section>
        <div className="lg:py-36 max-w-5xl mx-auto">
          <div className="mx-auto flex flex-wrap items-center 2xl:max-w-7xl">
            <div className="mb-16 flex flex-col items-start text-left md:mb-0 lg:w-1/2 lg:grow lg:pr-24">
              <span className="mb-8 text-xs font-bold uppercase tracking-widest text-foreground">
                Your tagline
              </span>
              <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter md:text-7xl lg:text-5xl">
                Search Any <span className="text-ai">Words</span> And <span className="text-ai">Learning</span>
              </h1>
              <p className="mb-8 text-left text-base leading-relaxed text-gray-500">
                Free and Premium themes, UI Kit's, templates and landing pages
                built with Tailwind CSS, HTML & Next.js.
              </p>
              <aside className="border-black mt-8 rounded-xl bg-gray-50 p-2 transition duration-500 ease-in-out sm:flex max-sm:w-full">
                <div className=" min-w-0 flex-1">
                  <label htmlFor="member_email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="text"
                    value={query}
                    className="block w-full rounded-md border-black border-transparent bg-transparent px-5 py-3 text-base text-gray-600 transition duration-500 ease-in-out placeholder:text-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a word"
                  />
                </div>
                <div className=" mt-4 sm:ml-3 sm:mt-0">
                  <button
                    onClick={handleSearch}
                    className="block w-full rounded-lg border-black border-transparent bg-black text-white px-5 py-3 text-base font-medium shadow hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                  >
                    Search {query}
                  </button>
                </div>
              </aside>

              <div className="sm:flex sm:max-w-lg">
                <p className="mt-3 text-xs text-gray-500">
                  By subscribing, you agree with Wickedblocks
                  <a className="underline" href="#">
                    Terms of Service
                  </a>
                  and
                  <a className="underline" href="#">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="mt-12 w-full rounded-xl lg:w-5/6 lg:max-w-lg xl:mt-0">
              <div>
                <div className="relative w-full max-w-lg">
                  <div className="relative">
                    <video
                      autoPlay
                      muted
                      loop
                      className="mx-auto rounded-lg object-cover object-center"
                      src="/video-11.mp4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto max-md:mt-12">
        <div>
          <h2 className="text-4xl font-medium md:text-6xl">Word Results:</h2>

          <ToggleGroup
            className="w-fit mt-8"
            type="single"
            defaultValue="cedict"
            variant="outline"
          >
            <ToggleGroupItem
              onClick={() => setDictionary("cedict")}
              value="cedict"
            >
              Cedict
            </ToggleGroupItem>
            <ToggleGroupItem
              onClick={() => setDictionary("stardict")}
              value="stardict"
            >
              Stardict
            </ToggleGroupItem>
            <ToggleGroupItem onClick={() => setDictionary("all")} value="all">
              Both
            </ToggleGroupItem>
          </ToggleGroup>

          <p className="mt-6 text-zinc-600 dark:text-zinc-200 md:mb-20 md:text-lg">
            Here's word related to {query}.
          </p>

          <div className="flex gap-12 max-md:flex-col">
            {dictionary === "cedict" && (
                <aside className="flex-1">
                  {cedictResults.map((result, index) => (
                    <div key={index} className="mt-12 md:mt-20">
                      <h3 className="mb-8 text-3xl font-medium md:text-4xl">
                        {result.simplified}
                      </h3>
                      <ul className="divide-y divide-border-black border-y border-border">
                        <li key={index} className="group">
                          <a className="flex items-center py-6">
                            <div>
                              <div className="text-2xl text-zinc-600 dark:text-zinc-200 md:mt-2 md:text-sm">
                                {result.pinyin}
                              </div>
                              <div className="text-xs text-zinc-600 dark:text-zinc-200 md:mt-2 md:text-sm">
                                {result.definitions}
                              </div>
                            </div>

                            <div
                              className="flex ml-auto gap-4"
                            >
                              <DictionaryDetail />

                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  ))}
                </aside>
              )}

            {dictionary === "stardict" && (
                <aside className="flex-1">
                  {stardictResults.map((result, index) => (
                    <div key={index} className="mt-12 md:mt-20">
                      <h3 className="mb-8 text-3xl font-medium md:text-4xl">
                        {result.simplified}
                      </h3>
                      <ul className="divide-y divide-border-black border-y border-border">
                        <li key={index} className="group">
                          <a className="flex items-center py-6">
                            <div>
                              <div className="text-2xl text-zinc-600 dark:text-zinc-200 md:mt-2 md:text-sm">
                                {result.pinyin}
                              </div>
                              <div className="text-xs text-zinc-600 dark:text-zinc-200 md:mt-2 md:text-sm">
                                <span dangerouslySetInnerHTML={{ __html: result.definitions.join('<br>') }} />
                              </div>
                            </div>

                            <div className="flex ml-auto gap-4">
                            <DictionaryDetail />

                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  ))}
                </aside>
              )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DictionaryClient;
