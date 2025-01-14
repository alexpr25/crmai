/**
 * Text sanitization utilities
 */

/**
 * Sanitizes a query string by trimming whitespace and normalizing spaces.
 */
export function sanitizeQuery(query: string): string {
  return query.trim().replace(/\s+/g, ' ');
}

/**
 * Sanitizes a text string with options for trimming, normalization, and case conversion.
 */
export function sanitizeText(
  text: string,
  options: { trimWhitespace?: boolean; normalizeSpaces?: boolean; toLowerCase?: boolean } = {}
): string {
  let sanitizedText = text;

  if (options.trimWhitespace) {
    sanitizedText = sanitizedText.trim();
  }

  if (options.normalizeSpaces) {
    sanitizedText = sanitizedText.replace(/\s+/g, ' ');
  }

  if (options.toLowerCase) {
    sanitizedText = sanitizedText.toLowerCase();
  }

  return sanitizedText;
}

/**
 * Removes stop words from text.
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