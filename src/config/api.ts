export const API_CONFIG = {
  // URL base para las llamadas a la API
  baseUrl: import.meta.env.VITE_API_BASE_URL || '/api', // Asegúrate de configurar esto correctamente en Railway.

  // Definición de los endpoints específicos
  endpoints: {
    chat: '/chat', // Endpoint para manejar las solicitudes del chat.
  },

  // Configuración de tiempos de espera
  timeouts: {
    default: 30000, // 30 segundos de espera por defecto.
  },

  // Configuración de reintentos
  retries: {
    max: 2, // Número máximo de intentos
    delay: 1000, // Retraso entre intentos en milisegundos.
  },
};