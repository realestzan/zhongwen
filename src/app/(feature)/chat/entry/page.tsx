// page.tsx

import PageChat from "./chat-client";

interface SearchParams {
  id: string;
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const id = searchParams.id;
  return <PageChat id={id} />;
}
