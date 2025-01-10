/**
 * Entity extraction utilities
 */
import { EntityType, EntityExtractionOptions } from './types';

const ENTITY_PATTERNS: Record<EntityType, RegExp> = {
  organization: /(?:[A-Z][a-z]+ )?(?:[A-Z][a-z]+ )?(?:Corporation|Inc\.|Ltd\.|LLC|SA|SL)/g,
  person: /[A-Z][a-z]+ (?:[A-Z][a-z]+ )?[A-Z][a-z]+/g,
  date: /\d{1,2}\/\d{1,2}\/\d{4}|\d{4}-\d{2}-\d{2}/g,
  money: /\$\d+(?:\.\d{2})?/g
};

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
    entities[type] = [...new Set(matches)];
  }

  return entities;
}

export * from './types';