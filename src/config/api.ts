export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  endpoints: {
    chat: '/chat',
  },
  timeouts: {
    default: 30000, // 30 seconds
  },
  retries: {
    max: 2,
    delay: 1000, // 1 second
  }
};