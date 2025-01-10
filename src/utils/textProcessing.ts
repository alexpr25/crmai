export function sanitizeQuery(query: string): string {
  return query.trim().replace(/\s+/g, ' ');
}

export function formatResponse(response: string): string {
  return response
    .trim()
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\*\*/g, '__');
}

export function extractRelevantInfo(text: string): string[] {
  const sentences = text.split(/[.!?]+/);
  return sentences
    .map(s => s.trim())
    .filter(s => s.length > 0);
}