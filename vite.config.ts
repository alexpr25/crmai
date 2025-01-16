import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

// Emulación de __dirname en módulos ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: process.env.NODE_ENV === 'development' ? {
      '/api': {
        target: 'http://localhost:5000', // Solo en desarrollo
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    } : {},
  },
});