importScripts('/bashW/uv/uv.bundle.js');

self.addEventListener('fetch', (event) => {
  event.respondWith(UV.handler.handleRequest(event.request));
});
