import { NextResponse } from 'next/server';
import parseCedict from '@/lib/parseCedict';
import { DictionaryEntry } from '@/utils/types';

let dictionary: DictionaryEntry[] | null = null;

export async function GET(req: Request) {
  if (!dictionary) {
    dictionary = parseCedict();
  }

  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || '';

  const results = dictionary.filter(entry =>
    entry.traditional.includes(query) ||
    entry.simplified.includes(query) ||
    entry.pinyin.includes(query) ||
    entry.definitions.some(def => def.includes(query))
  );

  return NextResponse.json(results);
}