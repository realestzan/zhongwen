// page.tsx

import DictionaryClient from "./dictionary-client";


interface SearchParams {
  id: string;
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const id = searchParams.id;
  return <DictionaryClient id={id} />;
}
