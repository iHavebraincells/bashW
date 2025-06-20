import { UVServiceWorker } from './uv.sw.js';
import { UVHandler } from './uv.handler.js';

self.UV = {
  config: {
    prefix: '/bashW/uv/',
    bare: 'https://bare.pages.dev',
    encodeUrl: (url) => btoa(url),
    decodeUrl: (url) => atob(url)
  },
  handler: UVHandler,
  serviceWorker: UVServiceWorker
};
