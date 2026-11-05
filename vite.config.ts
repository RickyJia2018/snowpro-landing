import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    // Opt-in public-data preview when a local backend is not running.
    // Never proxy authenticated routes or change the production API setting.
    const sharePreviewTarget = process.env.SNOWPRO_SHARE_PREVIEW_API;
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: sharePreviewTarget ? {
          '/v1/public': { target: sharePreviewTarget, changeOrigin: true },
          '^/get_course(?:[?]|$)': { target: sharePreviewTarget, changeOrigin: true },
        } : undefined,
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      test: {
        environment: 'happy-dom',
        globals: true,
        setupFiles: ['./src/test/setup.ts'],
      }
    };
});
