import { KeywordExtractionOptions } from '../types';

/**
 * Extracts keywords from a given text based on the provided options.
 * Removes punctuation, filters by minimum length, and excludes numbers if specified.
 *
 * @param text - The text from which to extract keywords.
 * @param options - Options for keyword extraction.
 * @returns An array of extracted keywords.
 */
export function extractKeywords(
  text: string,
  options: KeywordExtractionOptions = {}
): string[] {
  const {
    minLength = 3,
    excludeNumbers = true,
    caseSensitive = false,
  } = options;

  // Normalize case if case sensitivity is disabled
  const processedText = caseSensitive ? text : text.toLowerCase();

  // Remove punctuation and split into words
  const words = processedText
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') // Remove punctuation
    .split(/\s+/); // Split by whitespace

  // Filter words based on length and whether they are numbers
  return words.filter(
    (word) =>
      word.length >= minLength &&
      (!excludeNumbers || !/^\d+$/.test(word)) // Exclude numbers if specified
  );
}