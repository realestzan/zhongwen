// page.tsx

import ChatClient from "./chat-client";

interface SearchParams {
  id: string;
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const id = searchParams.id;
  return <ChatClient id={id} />;
}
