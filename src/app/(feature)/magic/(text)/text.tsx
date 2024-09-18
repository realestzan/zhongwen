'use client'
import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface TextSelectionWrapperProps {
  children: ReactNode;
}

const WrappedText: React.FC<TextSelectionWrapperProps> = ({ children }) => {
  const [selectedText, setSelectedText] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number } | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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
            top: `${dropdownPosition.top - 100}px`,
            left: `${dropdownPosition.left}px`,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px',
            zIndex: 10,
            boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* <p style={{ margin: '0 0 8px 0' }}>Selected: "{selectedText}"</p>
          <button onClick={handleCopy}>Copy</button>
          <button onClick={handleSaveToDatabase} style={{ marginLeft: '8px' }}>
            Save to Database
          </button> */}
          <WrapperText />
        </div>
      )}
    </div>
  );
};

export default WrappedText;







import {
  BookPlusIcon,
    BrainIcon,
    Cloud,
    CreditCard,
    Github,
    Globe2Icon,
    Keyboard,
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
import { ArchiveBoxArrowDownIcon, HeartIcon, LanguageIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { WrapperDrawer } from '../drawer';
import DictionaryDetail from '../../dictionary/entry/dictionary-detail';
import TextWord from './text-word';
  
  export function WrapperText() {
    const [open, setOpen] = useState(false)
    return (
     <main>
       <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {/* <Button variant="outline">Magic </Button> */}
          {/* <SparklesIcon scale={5} />  */}
          <div className='group p-4'>
          <WandSparklesIcon strokeWidth={1} className='group-hover:hidden hover:text-red-500 transition' size={35}/>
          <SparkleIcon strokeWidth={1} className='group-hover:block hidden hover:text-red-500 transition' size={35}/>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Magics</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <ArchiveBoxArrowDownIcon className="mr-2 h-4 w-4" strokeWidth={1}/>
              <span>Save</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HeartIcon className="mr-2 h-4 w-4" strokeWidth={1}/>
              <span>Favorite</span>
              <DropdownMenuShortcut>⌥⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className="mr-2 h-4 w-4" strokeWidth={1}/>
              <span>Copy</span>
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
          <TextWord />
       
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
    )
  }
  
