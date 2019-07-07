import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from './config';
import proxy from 'http-proxy-middleware';
const app = express();
const isProd = process.env.NODE_ENV === 'production';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use('/server1',
  proxy({
    target: config.proxyTarget,
    changeOrigin: true,
    pathRewrite: {
      '^/server1': '/'
    }
  })
);

app.get('*', function (req, res) {
  isProd ? res.sendFile(config.clientIndex) : res.send('not found');
});

app.listen(config.port);
