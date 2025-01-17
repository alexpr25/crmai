import { AIResponse } from '@/types/api';
import { mockQueryAI } from './mockApi';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export async function queryAI(prompt: string): Promise<AIResponse> {
  try {
    // Use mock API in development
    if (import.meta.env.DEV) {
      return await mockQueryAI(prompt);
    }

    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      console.error(`[API Error]: Status ${response.status}`);
      throw new Error('Error en la respuesta del servidor');
    }

    const data = await response.json();

    if (!data.result) {
      console.error('[API Error]: Respuesta inválida', data);
      throw new Error('Respuesta inválida del servidor');
    }

    return data;
  } catch (error) {
    console.error('[API Error]:', error);
    throw error;
  }
}