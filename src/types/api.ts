export interface AIResponse {
  result: string; // Cambiado de "text" a "result" según la respuesta del backend
  confidence?: number;
  sources?: string[];
  error?: string;
}

export interface APIError {
  message: string;
  code: string;
  details?: unknown;
}