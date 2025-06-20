
self.__uv$config = {
  prefix: '/uv/',
  bare: 'https://raw.githubusercontent.com/titaniumnetwork-dev/bare/main/',
  encodeUrl: function (url) {
    const encoder = new TextEncoder();
    const data = encoder.encode(url);
    return btoa(String.fromCharCode(...data));
  }
};
