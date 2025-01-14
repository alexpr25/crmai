/**
 * Entity extraction utilities
 */
import { EntityType, EntityExtractionOptions } from './types';

const ENTITY_PATTERNS: Record<EntityType, RegExp> = {
  organization: /(?:[A-Z][a-z]+ )?(?:[A-Z][a-z]+ )?(?:Corporation|Inc\.|Ltd\.|LLC|SA|SL)/g,
  person: /\b[A-Z][a-z]+(?:\s[A-Z][a-z]+)*\b/g, // Matches full names with optional middle names
  date: /\b\d{1,2}[\/-]\d{1,2}[\/-]\d{2,4}\b|\b\d{4}-\d{2}-\d{2}\b/g,
  money: /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g
};

/**
 * Extracts entities from a given text based on predefined patterns.
 *
 * @param text - The input text from which to extract entities.
 * @param options - Options to customize the entity extraction process.
 * @returns A record of entity types with their corresponding matches.
 */
export function extractEntities(
  text: string, 
  options: EntityExtractionOptions = {}
): Record<EntityType, string[]> {
  const { types = Object.keys(ENTITY_PATTERNS) as EntityType[] } = options;

  const entities: Record<EntityType, string[]> = {
    organization: [],
    person: [],
    date: [],
    money: []
  };

  for (const type of types) {
    const pattern = ENTITY_PATTERNS[type];
    const matches = text.match(pattern) || [];
    entities[type] = [...new Set(matches.map(match => match.trim()))]; // Remove duplicates and trim spaces
  }

  return entities;
}

// Re-export types for convenience
export * from './types';
