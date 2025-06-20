self.UVHandler = {
  handleRequest: (req) => fetch(req)
};

self.UV = {
  config: {
    prefix: '/bashW/uv/',
    bare: 'https://bare.pages.dev',
    encodeUrl: (url) => btoa(url),
    decodeUrl: (url) => atob(url)
  },
  handler: self.UVHandler,
};
