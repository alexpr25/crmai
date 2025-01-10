export type EntityType = 'organization' | 'person' | 'date' | 'money';

export interface EntityExtractionOptions {
  types?: EntityType[];
}