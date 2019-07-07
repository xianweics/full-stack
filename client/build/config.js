const path = require('path');

const config = {
  joinClient: (dir = '/') => path.join(__dirname, '../src', dir),
  joinProd: (dir = '/') => path.join(__dirname, '../dist', dir),
  publicPath: '/',
  dev: {
    isHttps: false,
    port: 8080,
    proxyUrl: 'http://localhost:3000'
  }
};

module.exports = config;
