import path from 'path';

export default {
  port: 3000,
  clientIndex: path.join(__dirname, '../../../client/dist/index.html'),
  proxyTarget:'http://localhost:3001'
};