const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackBase = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    new InlineManifestWebpackPlugin('manifest'),
    new CompressionPlugin()
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'all',
      minChunks: 2,
      maxInitialRequests: 5,
      minSize: 30000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor'
        }
      }
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new UglifyJsPlugin({
        parallel: true,
        uglifyOptions: {
          warnings: false,
          output: {
            beautify: false,
            comments: false
          },
          compress: {
            drop_console: true,
            collapse_vars: false,
            reduce_vars: false
          }
        }
      })
    ]
  }
};

if (process.env.npmConfigReport) {
  prodConfig.plugins.push(new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    analyzerHost: 'localhost',
    analyzerPort: 8888,
    reportFilename: 'report.html',
    defaultSizes: 'gzip',
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    statsOptions: null,
    logLevel: 'info'
  }));
}

module.exports = merge(webpackBase, prodConfig);
