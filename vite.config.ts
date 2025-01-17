import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

// Emulación de __dirname en módulos ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias para rutas absolutas en el frontend
    },
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_PROXY || 'http://localhost:5000', // Usa la variable de entorno para flexibilidad
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Mantiene la estructura de la ruta
      },
    },
  },
});