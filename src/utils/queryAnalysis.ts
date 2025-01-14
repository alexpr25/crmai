import { extractKeywords } from '@/utils/textProcessing/keywords';

/**
 * Detects the category of a query based on predefined keywords.
 *
 * @param query - The user's input query.
 * @returns The detected category of the query.
 */
export function detectQueryCategory(query: string): string {
  const keywords = {
    definiciones: ['qué es', 'definición', 'significa', 'qué significa'],
    procedimientos: ['cómo', 'proceso', 'procedimiento', 'cómo hacer'],
    requisitos: ['requisito', 'necesito', 'debo', 'tengo que'],
    plazos: ['cuándo', 'plazo', 'término', 'tiempo'],
  };

  const lowercaseQuery = query.toLowerCase();

  for (const [category, terms] of Object.entries(keywords)) {
    if (terms.some((term) => lowercaseQuery.includes(term))) {
      return category;
    }
  }

  return 'general';
}

/**
 * Extracts keywords from a query using the `extractKeywords` function.
 *
 * @param query - The user's input query.
 * @returns An array of extracted keywords.
 */
export function getQueryKeywords(query: string): string[] {
  try {
    return extractKeywords(query);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'An unknown error occurred while extracting keywords.';
    throw new Error(
      `Error extracting keywords: ${errorMessage}. Ensure 'extractKeywords' is correctly implemented in '@/utils/textProcessing'.`
    );
  }
}