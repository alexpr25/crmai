import { sanitizeText } from './sanitizer';
import { extractKeywords } from './keywords';
import { extractEntities } from './entities';
import { formatText } from './formatter';

export function sanitizeQuery(text: string): string {
  return sanitizeText(text, {
    trimWhitespace: true,
    normalizeSpaces: true
  });
}

export function formatResponse(text: string): string {
  return formatText(text)
    .trim()
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\*\*/g, '__');
}

// Re-export utility functions
export { extractKeywords } from './keywords';
export { extractEntities } from './entities';
export { sanitizeText } from './sanitizer';
export { formatText } from './formatter';

// Re-export types
export * from './types';