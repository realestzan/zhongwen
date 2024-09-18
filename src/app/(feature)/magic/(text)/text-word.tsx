'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ALargeSmallIcon,
  AudioLines,
  Book,
  BookmarkIcon,
  ChevronRightIcon,
  ForwardIcon,
  HeartIcon,
  Languages,
  List,
  NotebookTextIcon,
  PenLine,
  SendHorizontalIcon
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { handleCedictSearch } from "@/utils/db";
import { useEffect, useState } from "react";

export default function TextWord({selectedText} : {selectedText: string}) {
  const features = [
    { name: "Origin", description: "Designed by Good Goods, Inc." },
    {
      name: "Material",
      description:
        "Solid walnut base with rare earth magnets and powder coated steel card cover"
    },
    { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
    {
      name: "Finish",
      description: "Hand sanded and finished with natural oil"
    },
    { name: "Includes", description: "Wood card tray and 3 refill packs" },
    {
      name: "Considerations",
      description:
        "Made from natural materials. Grain and color vary with each item."
    }
  ];

  interface Example {
    definitions: string;
    pinyin: string;
    simplified: string;
  }

  const [examples, setExamples] = useState<Example[]>([])
  useEffect(() => {
    const fetchExamples = async () => {
      const cedict = await handleCedictSearch(selectedText);
      const newExamples = cedict.slice(0, 10).map(entry => ({
        definitions: entry.definitions.join(', '),
        pinyin: entry.pinyin,
        simplified: entry.simplified
      }));
      setExamples(newExamples);
    };
    fetchExamples();
  }, [selectedText]);


  return (
  
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-fit -ml-2" variant={'link'}>
            <LanguageIcon className="mr-2 h-4 w-4" strokeWidth={1}/>
            <span>Look Up</span>
          </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[80vw] max-sm:max-w-[100vw] max-h-[80vh] max-sm:max-h-[100vh] bg-background overflow-hidden flex items-center">
     
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-24 gap-y-16 px-4 py-24 sm:p-4 lg:max-w-7xl lg:grid-cols-2 lg:px-8 z-100">
        <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.25 }}
    >
          <div>
            <h2 className="text-7xl font-bold tracking-tight sm:text-4xl">
              {selectedText}
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-200 text-2xl">
              <div className="font-bold">{examples[1]?.definitions || ''}</div>
              <div>{examples[1]?.pinyin || ''}</div>
              <div className="text-ai">{examples[1]?.simplified || ''}</div>
            </p>

            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <aside className="group relative">
               <a href="/signin" className='absolute bottom-0 right-0 top-0 left-0 z-20 opacity-0 w-full flex items-center justify-center text-center text-3xl group-hover:opacity-100 transition duration-500 font-bold'>Sign<span className='px-2 text-ai'> in </span> first</a>
              <h2 className="text-xl my-4 group-hover:blur-[3px] group-hover:opacity-40 transition duration-500">Action</h2>
              <ToggleGroup
                type="multiple"
                className="flex w-full flex-wrap justify-between rounded-xl border  border-foreground/10 p-4 max-sm:min-w-0  min-w-[400px] group-hover:blur-[3px] group-hover:opacity-40 transition duration-500"
              >
                <ToggleGroupItem
                  size={"lg"}
                  value="bold"
                  aria-label="Toggle bold"
                >
                  <BookmarkIcon size={20}/>
                </ToggleGroupItem>
                <ToggleGroupItem
                  size={"lg"}
                  value="italic"
                  aria-label="Toggle italic"
                >
                  <NotebookTextIcon size={20}/>
                </ToggleGroupItem>
                <ToggleGroupItem
                  size={"lg"}
                  value="underline"
                  aria-label="Toggle underline"
                >
                  <HeartIcon size={20}/>
                </ToggleGroupItem>
                <ToggleGroupItem
                  size={"lg"}
                  value="underline"
                  aria-label="Toggle underline"
                >
                  <SendHorizontalIcon size={20}/>
                </ToggleGroupItem>
              </ToggleGroup>
            </aside>
            <div></div>

            <aside className="group relative">
               <a href="/signin" className='absolute bottom-0 right-0 top-0 left-0 z-20 opacity-0 w-full flex items-center justify-center text-center text-3xl group-hover:opacity-100 transition duration-500 font-bold'>Sign<span className='px-2 text-ai'> in </span> first</a>
              <h2 className="text-xl mb-4 group-hover:blur-[3px] group-hover:opacity-40 transition duration-500">AI Analytics</h2>
              <ToggleGroup
                type="multiple"
                className="flex w-full flex-wrap justify-between rounded-xl border  border-foreground/10 p-4 max-sm:min-w-0  min-w-[400px] group-hover:blur-[3px] group-hover:opacity-40 transition duration-500"
              >
                <ToggleGroupItem
                  size={"lg"}
                  value="bold"
                  aria-label="Toggle bold"
                >
                  <List size={20}/>
                </ToggleGroupItem>
                <ToggleGroupItem
                  size={"lg"}
                  value="italic"
                  aria-label="Toggle italic"
                >
                  <AudioLines size={20}/>
                </ToggleGroupItem>

                <ToggleGroupItem
                  size={"lg"}
                  value="underline"
                  aria-label="Toggle underline"
                >
                  <PenLine size={20}/>
                </ToggleGroupItem>
                <ToggleGroupItem
                  size={"lg"}
                  value="italic"
                  aria-label="Toggle italic"
                >
                  <Languages size={20}/>
                </ToggleGroupItem>
                <ToggleGroupItem
                  size={"lg"}
                  value="underline"
                  aria-label="Toggle underline"
                >
                  <Book size={20}/>
                </ToggleGroupItem>
              </ToggleGroup>
            </aside>

            <div></div>

            <img
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              src="/topic-2.svg"
              className="rounded-lg hover:scale-95 transition bg-gray-100"
            />
            <img
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              src="/topic-3.svg"
              className="rounded-lg hover:scale-95 transition bg-gray-100"
            />
          </div>
           
          </div>
    </motion.div>
    <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    >
           <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 overflow-scroll h-full">
              {examples.map((example) => (
                <div
                  key={example.simplified}
                  className="border-t border-gray-200 pt-4"
                >
                  <dt className="font-medium">{example.definitions}</dt>
                  <dd className="mt-2 text-sm text-gray-500 dark:text-gray-300 italic">
                    {example.pinyin}
                  </dd>
                </div>
              ))}
            </dl>
    </motion.div>

        </div>

      </DialogContent>
    </Dialog>
  );
}
