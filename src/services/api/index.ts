import { AIResponse } from '@/types/api';
import { mockQueryAI } from './mockApi';

export async function queryAI(prompt: string): Promise<AIResponse> {
  try {
    // Use mock API in development
    if (import.meta.env.DEV) {
      return await mockQueryAI(prompt);
    }

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    const data = await response.json();
    
    if (!data.text) {
      throw new Error('Respuesta inválida del servidor');
    }

    return data;
  } catch (error) {
    console.error('[API Error]:', error);
    throw error;
  }
}