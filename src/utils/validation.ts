export function validateQuery(query: string): boolean {
  if (!query || query.trim().length < 3) {
    return false;
  }

  if (query.length > 500) {
    return false;
  }

  return true;
}

export function validateResponse(response: string): boolean {
  if (!response || response.trim().length === 0) {
    return false;
  }

  return true;
}