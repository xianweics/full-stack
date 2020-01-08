import Koa from 'koa';
import koaStatic from 'koa-static';
import path from 'path';
import config from './config';
import proxy from 'http-proxy-middleware';
import fs from 'fs';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(bodyParser());
app.use(koaStatic(path.join(__dirname, '../../../client/dist')));

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Accept');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method === 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});

app.use(async (ctx, next) => {
  if (ctx.url.startsWith('/api')) {
    ctx.respond = false;
    return proxy({
      target: config.proxyTarget,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })(ctx.req, ctx.res, next);
  }
  await next();
});

app.use(async ctx => {
  ctx.type = 'html';
  ctx.body = fs.createReadStream(path.join(__dirname, '../../../client/dist/index.html'));
});

const server = app.listen(config.port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('访问地址为 http://%s:%s', host, port);
});
