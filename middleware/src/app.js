import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';
import config from './config';
import proxy from 'http-proxy-middleware';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../../../client/dist')));

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use('/api',
  proxy({
    target: config.proxyTarget,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/'
    }
  })
);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
});

const server = app.listen(config.port, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('访问地址为 http://%s:%s', host, port);
});
