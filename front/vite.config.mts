import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig /* , loadEnv */ } from 'vite';

export default defineConfig((/* { mode } */) => {
  //const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [TanStackRouterVite(), react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      sourcemap: true,
    },
  };
});
