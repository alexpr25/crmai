import { AIResponse } from '@/types/api';
import { INSURANCE_MOCK_DATA } from '@/mocks/insuranceData';

export async function mockQueryAI(prompt: string): Promise<AIResponse> {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const lowercasePrompt = prompt.toLowerCase();
  let result = '';

  // Verificar definiciones primero
  for (const [term, definition] of Object.entries(INSURANCE_MOCK_DATA.definitions)) {
    if (lowercasePrompt.includes(term)) {
      result = definition;
      break;
    }
  }

  // Si no se encuentra definición, buscar en las secciones
  if (!result) {
    const sections: string[] = [];

    Object.entries(INSURANCE_MOCK_DATA.sections).forEach(([_, content]) => {
      if (Array.isArray(content)) {
        const relevantContent = content.filter((text) =>
          text.toLowerCase().includes(lowercasePrompt) ||
          lowercasePrompt.split(' ').some(
            (word) => text.toLowerCase().includes(word) && word.length > 3
          )
        );

        if (relevantContent.length > 0) {
          sections.push(...relevantContent);
        }
      }
    });

    // Si se encuentran secciones relevantes, úsalas
    if (sections.length > 0) {
      result = sections.join('\n\n');
    } else {
      result = INSURANCE_MOCK_DATA.sections.general?.join('\n\n') || '';
    }
  }

  return {
    result: result || 'Lo siento, no encontré información específica sobre tu pregunta. Por favor, intenta reformular tu consulta.',
    confidence: result ? 0.95 : 0.5,
  };
}