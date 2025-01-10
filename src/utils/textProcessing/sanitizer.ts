/**
 * Text sanitization utilities
 */

/**
 * Sanitizes a query string by trimming whitespace and normalizing spaces
 */
export function sanitizeQuery(query: string): string {
  return query.trim().replace(/\s+/g, ' ');
}

/**
 * Removes stop words from text
 */
export function removeStopWords(text: string): string {
  const stopWords = [
    'el', 'la', 'los', 'las', 
    'un', 'una', 'unos', 'unas',
    'y', 'o', 'de', 'del', 'en',
    'por', 'para', 'con', 'sin'
  ];
  
  const words = text.toLowerCase().split(/\s+/);
  return words
    .filter(word => !stopWords.includes(word))
    .join(' ');
}