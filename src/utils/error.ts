import { APIError } from '@/types/api';

export class APIRequestError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public details?: unknown
  ) {
    super(message);
    this.name = 'APIRequestError';
  }
}

export function isAPIError(error: unknown): error is APIError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    'code' in error
  );
}

export function getErrorMessage(error: unknown): string {
  if (error instanceof APIRequestError) {
    return error.message;
  }
  
  if (isAPIError(error)) {
    return error.message;
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return 'Ha ocurrido un error inesperado';
}