import { sanitizeText } from './sanitizer';
import { extractKeywords } from './keywords';
import { extractEntities } from './entities';
import { formatText } from './formatter';

/**
 * Sanitizes a query string by normalizing spaces and trimming whitespace.
 * 
 * @param text - The text to sanitize.
 * @returns Sanitized text.
 */
export function sanitizeQuery(text: string): string {
  return sanitizeText(text, {
    trimWhitespace: true,
    normalizeSpaces: true,
  });
}

/**
 * Formats a response by normalizing whitespace and applying markdown transformations.
 * 
 * @param text - The text to format.
 * @returns Formatted text.
 */
export function formatResponse(text: string): string {
  return formatText(text)
    .trim()
    .replace(/\n{3,}/g, '\n\n') // Limit multiple newlines
    .replace(/\*\*/g, '__'); // Replace double asterisks with underscores
}

/**
 * Extracts keywords from a given text.
 * 
 * @param text - The text to extract keywords from.
 * @returns An array of extracted keywords.
 */
export function extractQueryKeywords(text: string): string[] {
  return extractKeywords(text);
}

/**
 * Extracts entities from a given text.
 * 
 * @param text - The text to extract entities from.
 * @returns A record of entities categorized by type.
 */
export function extractQueryEntities(text: string): Record<string, string[]> {
  return extractEntities(text);
}

// Re-export utility functions
export { sanitizeText } from './sanitizer';
export { extractKeywords } from './keywords'; // Ensure keywords are exported
export { extractEntities } from './entities';
export { formatText } from './formatter';

// Re-export types
export * from './types';