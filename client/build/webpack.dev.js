const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackBaseConfig = require('./webpack.base');
const { publicPath, dev } = require('./config');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: publicPath,
    https: dev.isHttps,
    port: dev.port,
    hot: true,
    open: true,
    proxy: [
      {
        context: [],
        target: dev.proxyUrl,
        bypass: (req, res, opt) => {
          if (req.headers.accept && req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.');
            return '/index.html';
          }
        }
      }
    ]
  }
});
