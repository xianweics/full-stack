import Koa from 'koa';
import koaStatic from 'koa-static';
import path from 'path';
import config from './config';
import proxy from 'http-proxy-middleware';
import fs from 'fs';
import bodyParser from 'koa-bodyparser';

const app = new Koa();

app.use(bodyParser()); // 解析body
app.use(koaStatic(path.join(__dirname, '../../../client/dist'))); // 设置静态资源路径

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Credentials', true); // 请求是否携带认证信息
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080'); // 指定域名访问
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Accept'); // 允许请求的头字段，包括自定义头信息
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); // 允许请求的类型
  if (ctx.method === 'OPTIONS') {
    ctx.status = 200; // option 预请求放行
  } else if (ctx.url.startsWith('/api')) {
    ctx.response = false; // 绕过koa内置响应处理。使用代理处理请求
    return proxy({
      target: config.proxyTarget,
      pathRewrite: {
        '^/api': '/' // 将/api的路径替换成/。 例如/api/test => /test
      }
    })(ctx.req, ctx.res, next);
  } else {
    // 找不到页面时候。使用默认地址
    ctx.type = 'html';
    ctx.body = fs.createReadStream(path.join(__dirname, '../../../client/dist/index.html'));
  }
});

const server = app.listen(config.port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('访问地址为 http://%s:%s', host, port);
});
