import { AIResponse } from '@/types/api';
import { API_CONFIG } from '@/config/api';
import { APIRequestError } from '@/utils/error';
import { mockQueryAI } from './mockApi';

const isDevelopment = import.meta.env.DEV;

/**
 * Realiza una consulta a la API para obtener una respuesta de AI.
 *
 * @param prompt - El texto del prompt para enviar a la API.
 * @returns Una respuesta de la API con los datos procesados.
 * @throws APIRequestError si ocurre un error en la solicitud.
 */
export async function queryAI(prompt: string): Promise<AIResponse> {
  try {
    // Usar API simulada en desarrollo
    if (isDevelopment) {
      console.log('[Mock API] Usando datos simulados para desarrollo.');
      return await mockQueryAI(prompt);
    }

    // Enviar solicitud al backend real
    const response = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.chat}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: prompt }), // Asegúrate de que coincida con el formato esperado por el backend
    });

    // Manejar errores de respuesta HTTP
    if (!response.ok) {
      throw new APIRequestError(
        `Error en la respuesta del servidor. Código: ${response.status}`,
        response.status
      );
    }

    // Procesar la respuesta JSON
    const data: AIResponse = await response.json();

    // Validar datos de la respuesta
    if (!data.result) {
      throw new APIRequestError('Respuesta inválida del servidor: faltan datos.');
    }

    return data;
  } catch (error) {
    console.error('[API Error]:', error);
    // Propaga el error para manejarlo en niveles superiores
    throw error;
  }
}