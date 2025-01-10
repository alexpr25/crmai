export interface AIResponse {
  text: string;
  confidence: number;
  sources?: string[];
  error?: string;
}

export interface APIError {
  message: string;
  code: string;
  details?: unknown;
}