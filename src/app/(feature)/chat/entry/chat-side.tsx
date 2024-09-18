'use client'

import moment from 'moment'
import { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { dbDeleteChat, dbGetChats } from '@/utils/db'
import { Chat } from '@/utils/types'
import { useRouter } from 'next/navigation'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: '/topic-2.svg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Red',
    price: '$32.00',
    quantity: 1,
    imageSrc: '/topic-3.svg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

interface ChatSideProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  }
export default function ChatSide({ open, setOpen }: ChatSideProps) {

  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter()
  const handleOpenChat = (id: string) => {
    const url = `/chat/entry?id=${id}`;
    router.push(url); // Client-side navigation without page reload
    setOpen(false);
  };

  const handleNewChat = () => {
    router.push('/chat/entry')
    setOpen(false)
  } 

  const handleChatName = (id: string) => {

  }


  useEffect(() => {
    const fetchChats = async () => {
      try {
        setLoading(true);
        const fetchedChats = await dbGetChats(); // Fetch the chats
        setChats(fetchedChats); // Update state with the fetched chats
      } catch (error) {
        console.error("Error fetching chats:", error);
        setError("Failed to load chats");
      } finally {
        setLoading(false); // Set loading to false after fetching is done
      }
    };

    fetchChats(); // Call the fetch function inside useEffect
  }, []); // Empty dependency array ensures it runs once on component mount

  if (loading) return <p>Loading chats...</p>;
  if (error) return <p>{error}</p>;




  return (
    <Dialog open={open} onClose={setOpen} className="z-10 absolute bottom-0">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-background/70 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />
      

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-background shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium">Conversations</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover: "
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-foreground/10">
                        {chats.map((chat) => (
                          <li onClick={() => handleOpenChat(chat.uid)} key={chat.uid} className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border  border-foreground/10">
                              {/* <img
                                alt={chat.imageAlt}
                                src={chat.imageSrc}
                                className="h-full w-full object-cover object-center"
                              /> */}
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium">
                                  <h3 onDoubleClick={() => handleChatName(chat.uid)}>
                                    <p >{moment(chat.title).format('MMMM Do, YYYY [at] h:mm:ss A').split(' at ')[0]}</p>
                                    <p >{moment(chat.title).format('MMMM Do, YYYY [at] h:mm:ss A').split(' at ')[1]}</p>
                                  </h3>
                                  {/* <p className="ml-4">{chat.uid}</p> */}
                                </div>
                                {/* <p className="mt-1 text-sm  ">{chat.color}</p> */}
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="max-sm:max-w-[20vw] overflow-hidden text-ellipsis">{chat.uid}</p>

                                <div className="flex">
                                  <button type="button" onClick={() => dbDeleteChat(chat.uid)} className="font-medium text-red-600 hover:text-red-500">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>


                <div className="border-t border-foreground/10 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium">
                    <p>Total Chats</p>
                    <p>{chats.length}</p>
                  </div>
                  {/* <p className="mt-0.5 text-sm  ">Shipping and taxes calculated at checkout.</p> */}
                  <div className="mt-6">
                    <button
                      onClick={handleNewChat}
                      className="flex w-full items-center justify-center rounded-md border  border-transparent bg-foreground text-background px-6 py-3 text-base font-medium shadow-sm hover:bg-foreground/80"
                    >
                      New Chat
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm  ">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-red-600 hover:text-red-500"
                      >
                        Save current chat
                      </button>
                    </p>
                  </div>
                </div>
              </div>

            </DialogPanel>
          </div>
        </div>
      </div>

    </Dialog>
  )
}
