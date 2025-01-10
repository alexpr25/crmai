import { KeywordExtractionOptions } from '../types';

export function extractKeywords(text: string, options: KeywordExtractionOptions = {}): string[] {
  const {
    minLength = 3,
    excludeNumbers = true,
    caseSensitive = false
  } = options;

  const processedText = caseSensitive ? text : text.toLowerCase();
  
  // Remove punctuation and split into words
  const words = processedText
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .split(/\s+/);
    
  return words.filter(word => 
    word.length >= minLength && 
    (!excludeNumbers || !/^\d+$/.test(word))
  );
}