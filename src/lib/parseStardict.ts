import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { DictionaryEntry } from '@/utils/types';

const parseStarDict = async (): Promise<DictionaryEntry[]> => {
  const dictPath = path.join(process.cwd(), 'src/data', 'cc-cedict');
  const idxPath = path.join(dictPath, 'cc-cedict.idx');
  const dictDzPath = path.join(dictPath, 'cc-cedict.dict.dz');

  const idxData = fs.readFileSync(idxPath);
  const dictDzData = fs.readFileSync(dictDzPath);
  const dictData = zlib.unzipSync(dictDzData);

  const dictionary: DictionaryEntry[] = [];

  let offset = 0;
  while (offset < idxData.length) {
    const endOfWord = idxData.indexOf(0, offset);
    const word = idxData.toString('utf8', offset, endOfWord);
    offset = endOfWord + 1;

    const dataOffset = idxData.readUInt32BE(offset);
    offset += 4;

    const dataSize = idxData.readUInt32BE(offset);
    offset += 4;

    const definition = dictData.toString('utf8', dataOffset, dataOffset + dataSize);

    // Extract traditional, simplified, pinyin, and definitions using regex
    const traditionalMatch = definition.match(/<font color="#808"><b>(.*?)<\/b><\/font>/);
    const simplifiedMatch = definition.match(/<font color="#080"><b>(.*?)<\/b><\/font>/);
    const pinyinMatch = definition.match(/<font color="#f00">(.*?)<\/font>/);
    const definitionsMatch = definition.match(/<br>• (.*?)<br>/g);

    const traditional = traditionalMatch ? traditionalMatch[1] : '';
    const simplified = simplifiedMatch ? simplifiedMatch[1] : '';
    const pinyin = pinyinMatch ? pinyinMatch[1] : '';
    const definitions = definitionsMatch ? definitionsMatch.map(def => def.replace(/<br>• /, '').replace(/<br>/, '')) : [];

    // Validate and add entry to dictionary
    dictionary.push({
      traditional,
      simplified,
      pinyin,
      definitions,
    });
  }

  return dictionary;
};

export default parseStarDict;