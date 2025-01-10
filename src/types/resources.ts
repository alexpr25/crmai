export interface ExternalResource {
  name: string;
  url: string;
  description: string;
  relevance: number;
}

export interface ResourceResponse {
  source: string;
  content: string;
  url?: string;
  confidence: number;
}