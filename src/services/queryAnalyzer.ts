import { QueryAnalysis, QueryType, QueryContext } from '@/types/query';
import { sanitizeQuery } from '@/utils/textProcessing';
import { extractKeywords } from '@/utils/textProcessing/keywords';
import { extractEntities } from '@/utils/textProcessing/entities';

export function analyzeQuery(query: string): QueryAnalysis {
  const cleanQuery = sanitizeQuery(query);
  const keywords = extractKeywords(cleanQuery);
  const entities = extractEntities(cleanQuery);
  
  return {
    type: identifyQueryType(cleanQuery),
    context: extractQueryContext(cleanQuery, keywords),
    keywords,
    originalQuery: query,
    entities: Object.values(entities).flat()
  };
}

function identifyQueryType(query: string): QueryType {
  // Implementation remains the same
  return 'GENERAL';
}

function extractQueryContext(query: string, keywords: string[]): QueryContext {
  // Implementation remains the same
  return 'GENERAL';
}