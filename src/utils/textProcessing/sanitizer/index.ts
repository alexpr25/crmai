/**
 * Text sanitization utilities
 */
import { SanitizerOptions } from './types';

export function sanitizeText(text: string, options: SanitizerOptions = {}): string {
  const {
    trimWhitespace = true,
    normalizeSpaces = true,
    removePunctuation = false
  } = options;

  let result = text;

  if (trimWhitespace) {
    result = result.trim();
  }

  if (normalizeSpaces) {
    result = result.replace(/\s+/g, ' ');
  }

  if (removePunctuation) {
    result = result.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  }

  return result;
}

export * from './types';