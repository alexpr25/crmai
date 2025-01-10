/**
 * Text formatting utilities
 */

export function formatText(text: string): string {
  return text
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/([.!?])(\w)/g, '$1 $2')
    .replace(/\s+([.,!?])/g, '$1');
}

export function formatMarkdown(text: string): string {
  return text
    .replace(/\*\*/g, '__')
    .replace(/\n{3,}/g, '\n\n');
}