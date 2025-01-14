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
});