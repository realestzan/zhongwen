// Tag.tsx
import React from 'react';

interface TagProps {
  tag: string;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return <span className="text-4xl">{tag}</span>;
};

export default Tag;