import React from 'react';
import ReactMarkdown from 'react-markdown';
import { ResponseDisplayProps } from '@/types/response';

export const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response }) => {
  if (!response) return null;

  return (
    <div className="mt-6 prose max-w-none">
      <ReactMarkdown>{response}</ReactMarkdown>
    </div>
  );
};