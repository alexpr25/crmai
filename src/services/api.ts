import { AIResponse } from '@/types/api';
import { API_CONFIG } from '@/config/api';
import { APIRequestError } from '@/utils/error';
import { mockQueryAI } from './mockApi';

const isDevelopment = import.meta.env.DEV;

export async function queryAI(prompt: string): Promise<AIResponse> {
  try {
    // Use mock API in development
    if (isDevelopment) {
      return await mockQueryAI(prompt);
    }

    const response = await fetch(
      `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.chat}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      }
    );

    if (!response.ok) {
      throw new APIRequestError(
        'Error en la respuesta del servidor',
        response.status
      );
    }

    const data = await response.json();
    
    if (!data.text) {
      throw new APIRequestError('Respuesta inválida del servidor');
    }

    return data;
  } catch (error) {
    console.error('[API Error]:', error);
    throw error;
  }
}