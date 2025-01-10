import { extractKeywords } from '@/utils/textProcessing';

export function detectQueryCategory(query: string): string {
  const keywords = {
    definiciones: ['qué es', 'definición', 'significa', 'qué significa'],
    procedimientos: ['cómo', 'proceso', 'procedimiento', 'cómo hacer'],
    requisitos: ['requisito', 'necesito', 'debo', 'tengo que'],
    plazos: ['cuándo', 'plazo', 'término', 'tiempo'],
  };

  const lowercaseQuery = query.toLowerCase();

  for (const [category, terms] of Object.entries(keywords)) {
    if (terms.some(term => lowercaseQuery.includes(term))) {
      return category;
    }
  }

  return 'general';
}

// Remove duplicate extractKeywords function since we're now importing it