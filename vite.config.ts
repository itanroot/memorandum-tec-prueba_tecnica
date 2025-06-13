
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@utils': path.resolve(__dirname, 'src/common/utils'),
      '@services': path.resolve(__dirname, 'src/common/services'),
      '@components': path.resolve(__dirname, 'src/common/components'),
    },
  },
  // ...otros ajustes y plugins
});
