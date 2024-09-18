'use client'
import React, { useState, useEffect, useRef, ReactNode } from 'react';

import { ArchiveBoxArrowDownIcon, HeartIcon, LanguageIcon, SparklesIcon } from '@heroicons/react/24/outline';

import TextWord from './text-word';
import { dbSetWord, handleCedictSearch } from '@/utils/db';
import { aiTranslate } from '@/utils/prompt';




import {
  BookPlusIcon,
    BrainIcon,
    Cloud,
    CreditCard,
    Github,
    Globe2Icon,
    Keyboard,
    LanguagesIcon,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    SparkleIcon,
    User,
    UserPlus,
    Users,
    WandSparklesIcon,
  } from "lucide-react"
  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Dialog } from '@/components/generic/dialog';

interface TextSelectionWrapperProps {
  children: ReactNode;
}

const WrappedText: React.FC<TextSelectionWrapperProps> = ({ children }) => {
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number } | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // const [alert, setAlert] = useState('')

  // Function to handle text selection
  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      const selectedText = selection.toString().trim();
      setSelectedText(selectedText);

      // Get the bounding rectangle of the selection to position the dropdown
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setDropdownPosition({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX });
    } else {
      setSelectedText(null); // Reset if no text is selected
      setDropdownPosition(null); // Hide the dropdown
    }
  };

  // Function to copy the selected text
  const handleCopy = () => {
    if (selectedText) {
      navigator.clipboard.writeText(selectedText);
      alert('Text copied to clipboard');
      // Optionally hide the dropdown after action
      setSelectedText(null);
      setDropdownPosition(null);
    }
  };

  // Function to simulate saving to a database
  const handleSaveToDatabase = () => {
    if (selectedText) {
      console.log(`Saving "${selectedText}" to the database...`);
      alert(`Saved "${selectedText}" to the database!`);
      // Optionally hide the dropdown after action
      setSelectedText(null);
      setDropdownPosition(null);
    }
  };

  // Add event listener for text selection change
  useEffect(() => {
    document.addEventListener('selectionchange', handleTextSelection);
    return () => {
      document.removeEventListener('selectionchange', handleTextSelection);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {children}

      {selectedText && dropdownPosition && (
        <div
          ref={dropdownRef}
          style={{
            position: 'absolute',
            top: `${dropdownPosition.top - 90}px`,
            left: `${dropdownPosition.left}px`,
          }}
          className='bg-foreground p-2 max-sm:p-1 rounded-2xl z-10'
        >
          {/* <p style={{ margin: '0 0 8px 0' }}>Selected: "{selectedText}"</p>
          <button onClick={handleCopy}>Copy</button>
          <button onClick={handleSaveToDatabase} style={{ marginLeft: '8px' }}>
            Save to Database
          </button> */}
          
          
          <main>
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='group p-4'>
          <WandSparklesIcon className='group-hover:hidden text-background max-sm:w-4 max-sm:h-4 hover:text-red-500 transition' size={25}/>
          <SparkleIcon className='group-hover:block hidden text-background max-sm:w-4 max-sm:h-4 hover:text-red-500 transition' size={25}/>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Magics</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => dbSetWord(selectedText)}>
              <ArchiveBoxArrowDownIcon className="mr-2 h-4 w-4" strokeWidth={1}/>
              <span>Save</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HeartIcon className="mr-2 h-4 w-4" strokeWidth={1}/>
              <span>Favorite</span>
              <DropdownMenuShortcut>⌥⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => { 
              window.open(`/dictionary/entry?id=${selectedText}`)
            }}>
              <Keyboard className="mr-2 h-4 w-4" strokeWidth={1}/>
              <span>Dictionary</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BookPlusIcon className="mr-2 h-4 w-4" strokeWidth={1}/>
              <span>Notebook</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Plus className="mr-2 h-4 w-4" strokeWidth={1}/>
              <span>New Notebook</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={async () => { 
                 const cedict = await handleCedictSearch(selectedText); // Await the result of handleCedictSearch

                 const examples = [{}]
                 cedict.slice(0, 10).map(example => {
                  examples.push(example);
                });

                alert(JSON.stringify(examples))
            }}>
              <Plus className="mr-2 h-4 w-4" strokeWidth={1}/>
              <span>Usage</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="mr-2 h-4 w-4" strokeWidth={1}/>
                <span>Share</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" strokeWidth={1}/>
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" strokeWidth={1}/>
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle className="mr-2 h-4 w-4" strokeWidth={1}/>
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
           
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          {/* <WrapperDrawer open={open} setOpen={setOpen}></WrapperDrawer> */}
          
          <TextWord selectedText={selectedText} />
       
          <DropdownMenuItem onClick={async () => { 
            const result = await aiTranslate(selectedText)
            // setAlert(result)
            alert(result)
          }}>
            {/* <Dialog open={alert != '' && true} title='Translate:' description={alert} onCancel={() => setAlert('')} /> */}
            <LanguagesIcon strokeWidth={1} className="mr-2 h-4 w-4" />
            <span>Translate</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Globe2Icon strokeWidth={1} className="mr-2 h-4 w-4" />
            <span>Remind</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <Cloud className="mr-2 h-4 w-4" strokeWidth={1}/>
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" strokeWidth={1}/>
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

     </main>


        </div>
      )}
    </div>
  );
};

export default WrappedText;



