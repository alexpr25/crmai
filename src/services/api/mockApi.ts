import { AIResponse } from '@/types/api';
import { INSURANCE_MOCK_DATA } from '@/mocks/insuranceData';

export async function mockQueryAI(prompt: string): Promise<AIResponse> {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  const lowercasePrompt = prompt.toLowerCase();
  let response = '';

  // Check definitions first
  for (const [term, definition] of Object.entries(INSURANCE_MOCK_DATA.definitions)) {
    if (lowercasePrompt.includes(term)) {
      response = definition;
      break;
    }
  }

  // If no definition found, check sections
  if (!response) {
    const sections = [];
    
    // Check each section for relevant content
    for (const [category, content] of Object.entries(INSURANCE_MOCK_DATA.sections)) {
      if (Array.isArray(content)) {
        const relevantContent = content.filter(text =>
          text.toLowerCase().includes(lowercasePrompt) ||
          lowercasePrompt.split(' ').some(word => 
            text.toLowerCase().includes(word) && word.length > 3
          )
        );
        
        if (relevantContent.length > 0) {
          sections.push(...relevantContent);
        }
      }
    }

    // If relevant sections found, use them
    if (sections.length > 0) {
      response = sections.join('\n\n');
    } else {
      // Fallback to general information
      response = INSURANCE_MOCK_DATA.sections.general.join('\n\n');
    }
  }

  return {
    text: response || 'Lo siento, no encontré información específica sobre tu pregunta. Por favor, intenta reformular tu consulta.',
    confidence: response ? 0.95 : 0.5
  };
}