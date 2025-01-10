import { InsuranceQuery } from '@/types/insurance';
import { sanitizeQuery } from '@/utils/textProcessing';

export function processInsuranceQuery(query: string): InsuranceQuery {
  const sanitizedQuery = sanitizeQuery(query);
  
  return {
    query: sanitizedQuery,
    timestamp: new Date().toISOString(),
    category: detectQueryCategory(sanitizedQuery)
  };
}

function detectQueryCategory(query: string): string {
  const categories = {
    definicion: ['qué es', 'definición', 'significa', 'qué significa'],
    procedimiento: ['cómo', 'proceso', 'procedimiento', 'cómo hacer'],
    requisitos: ['requisito', 'necesito', 'debo', 'tengo que'],
    plazos: ['cuándo', 'plazo', 'término', 'tiempo']
  };

  const lowercaseQuery = query.toLowerCase();
  
  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => lowercaseQuery.includes(keyword))) {
      return category;
    }
  }

  return 'general';
}