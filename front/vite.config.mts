import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig /* , loadEnv */ } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig((/* { mode } */) => {
  //const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      TanStackRouterVite(),
      react(),
      VitePWA({
        registerType: 'prompt',
        injectRegister: false,

        pwaAssets: {
          disabled: false,
          config: true,
        },

        manifest: {
          name: "RandomGraill'",
          short_name: "RandomGraill'",
          description: 'Find where to eat easily',
          theme_color: '#ffffff',
        },

        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
        },

        devOptions: {
          enabled: true,
          navigateFallback: 'index.html',
          suppressWarnings: true,
          type: 'module',
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      sourcemap: true,
    },
    server: {
      port: 5173,
    },
  };
});
