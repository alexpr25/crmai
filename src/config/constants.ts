export const APP_CONFIG = {
  appName: 'CPR-AI',
  description: 'Asistente de Código de Seguros de Puerto Rico',
  version: '1.0.0'
};

export const QUERY_CONFIG = {
  minLength: 3,
  maxLength: 500,
  debounceMs: 300
};

export const ERROR_MESSAGES = {
  queryTooShort: `La pregunta debe tener al menos ${QUERY_CONFIG.minLength} caracteres`,
  queryTooLong: `La pregunta no debe exceder ${QUERY_CONFIG.maxLength} caracteres`,
  invalidResponse: 'La respuesta no es válida',
  serverError: 'Error en el servidor',
  networkError: 'Error de conexión',
  unexpectedError: 'Ha ocurrido un error inesperado'
};