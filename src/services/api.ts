import { AIResponse } from '@/types/api';
import { mockQueryAI } from './mockApi';

/**
 * Envía una consulta al backend o usa un mock en modo desarrollo.
 *
 * @param prompt - Consulta que el usuario quiere enviar.
 * @returns La respuesta del backend procesada.
 */
export async function queryAI(prompt: string): Promise<AIResponse> {
  try {
    // Usa mock API en modo desarrollo
    if (import.meta.env.DEV) {
      return await mockQueryAI(prompt);
    }

    // Realiza la solicitud al backend
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: prompt }),
    });

    if (!response.ok) {
      throw new Error(
        `Error en la respuesta del servidor: ${response.status} ${response.statusText}`
      );
    }

    const data: AIResponse = await response.json();

    // Verifica si la propiedad `result` existe en la respuesta
    if (!data.result) {
      throw new Error('Respuesta inválida del servidor: falta "result"');
    }

    return {
      ...data, // Retorna la respuesta completa
      result: data.result,
    };
  } catch (error) {
    console.error('[API Error]:', error);
    throw new Error(
      'Hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.'
    );
  }
}