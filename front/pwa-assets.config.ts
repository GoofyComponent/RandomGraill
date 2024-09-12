import {
  defineConfig,
  minimal2023Preset as preset,
} from '@vite-pwa/assets-generator/config';

let config;

//If os is not windows do not use the windows preset
if (process.platform !== 'win32') {
  config = defineConfig({
    headLinkOptions: {
      preset: '2023',
    },
    preset,
    images: ['public/favicon.svg'],
  });
}

export default defineConfig(config);
