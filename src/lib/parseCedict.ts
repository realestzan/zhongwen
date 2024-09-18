
  import { DictionaryEntry } from '@/utils/types';
import fs from 'fs';
  import path from 'path';
  
  const parseCedict = (): DictionaryEntry[] => {
    const filePath = path.join(process.cwd(), 'src/data', 'cedict_ts.u8');
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split('\n');
    const dictionary: DictionaryEntry[] = [];
  
    lines.forEach(line => {
      if (line.startsWith('#') || line.trim() === '') {
        return;
      }
  
      const match = line.match(/^(\S+)\s+(\S+)\s+\[(.+?)\]\s+\/(.+)\//);
      if (match) {
        const [_, traditional, simplified, pinyin, definitions] = match;
        dictionary.push({
          traditional,
          simplified,
          pinyin,
          definitions: definitions.split('/').filter(Boolean),
        });
      }
    });
  
    return dictionary;
  };
  

export default parseCedict;