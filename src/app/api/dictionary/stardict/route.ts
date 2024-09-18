import { NextResponse } from 'next/server';
import { DictionaryEntry } from '@/utils/types';
import parseStarDict from '@/lib/parseStardict';

let dictionary: DictionaryEntry[] | null = null;

export async function GET(req: Request) {
  try {
    if (!dictionary) {
      console.log('Parsing dictionary');
      dictionary = await parseStarDict();
      console.log('Dictionary parsed successfully');
    }

    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query') || '';

    if (!query) {
      return NextResponse.json([]);
    }

    console.log(`Searching for query: ${query}`);
    const results = dictionary.filter(entry =>
      entry.traditional.includes(query) ||
      entry.simplified.includes(query) ||
      entry.pinyin.includes(query) ||
      entry.definitions.some(def => def.includes(query))
    );

    console.log(`Found ${results.length} results for query: ${query}`);
    console.log('Results:', results);

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error handling request:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}