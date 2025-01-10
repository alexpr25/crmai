/**
 * Text extraction utilities
 */

/**
 * Extracts keywords from text
 */
export function extractKeywords(text: string): string[] {
  // Remove punctuation and split into words
  const words = text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .split(/\s+/);
    
  // Filter out short words and numbers
  return words.filter(word => 
    word.length > 2 && !/^\d+$/.test(word)
  );
}

/**
 * Extracts relevant sentences from text
 */
export function extractRelevantInfo(text: string): string[] {
  const sentences = text.split(/[.!?]+/);
  return sentences
    .map(s => s.trim())
    .filter(s => s.length > 0);
}

/**
 * Extracts named entities (e.g. names, organizations) from text
 */
export function extractEntities(text: string): string[] {
  // Simple regex-based entity extraction
  // Could be enhanced with NLP libraries in the future
  const patterns = {
    organizations: /(?:[A-Z][a-z]+ )?(?:[A-Z][a-z]+ )?(?:Corporation|Inc\.|Ltd\.|LLC|SA|SL)/g,
    names: /[A-Z][a-z]+ (?:[A-Z][a-z]+ )?[A-Z][a-z]+/g
  };

  const entities: string[] = [];
  
  for (const pattern of Object.values(patterns)) {
    const matches = text.match(pattern) || [];
    entities.push(...matches);
  }

  return [...new Set(entities)];
}