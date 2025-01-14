import { QueryAnalysis, QueryType, QueryContext } from '@/types/query';
import { sanitizeQuery } from '@/utils/textProcessing';
import { extractKeywords } from '@/utils/textProcessing/keywords';
import { extractEntities } from '@/utils/textProcessing/entities';

export function analyzeQuery(query: string): QueryAnalysis {
  const cleanQuery = sanitizeQuery(query);
  const keywords = extractKeywords(cleanQuery);
  const entities = Object.values(extractEntities(cleanQuery)).flat(); // Flatten nested arrays manually

  return {
    type: identifyQueryType(cleanQuery),
    context: extractQueryContext(keywords),
    keywords,
    originalQuery: query,
    entities
  };
}

function identifyQueryType(query: string): QueryType {
  // Determina el tipo de consulta basado en palabras clave
  const lowercaseQuery = query.toLowerCase();

  if (lowercaseQuery.includes('insurance') || lowercaseQuery.includes('policy')) {
    return 'INSURANCE';
  }

  if (lowercaseQuery.includes('definition') || lowercaseQuery.includes('what is')) {
    return 'DEFINITION';
  }

  return 'GENERAL';
}

function extractQueryContext(keywords: string[]): QueryContext {
  // Determina el contexto de la consulta basado en las palabras clave
  const lowerKeywords = keywords.map(keyword => keyword.toLowerCase());

  if (lowerKeywords.some(keyword => ['policy', 'coverage'].includes(keyword))) {
    return 'POLICY';
  }

  if (lowerKeywords.some(keyword => ['claim', 'reimbursement'].includes(keyword))) {
    return 'CLAIMS';
  }

  return 'GENERAL';
}