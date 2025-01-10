export interface TextProcessingOptions {
  removeStopWords?: boolean;
  extractEntities?: boolean;
  formatResponse?: boolean;
}

export interface ProcessedText {
  original: string;
  cleaned: string;
  keywords: string[];
  entities?: string[];
}

export interface KeywordExtractionOptions {
  minLength?: number;
  excludeNumbers?: boolean;
  caseSensitive?: boolean;
}

export interface SanitizerOptions {
  trimWhitespace?: boolean;
  normalizeSpaces?: boolean;
  removePunctuation?: boolean;
}