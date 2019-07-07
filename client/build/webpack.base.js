const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const SassLintPlugin = require('sass-lint-webpack');

const { publicPath, joinClient, joinProd } = require('./config');

const sassRegex = /\.(sa|sc|c)ss$/;
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
const sassModuleRegex = /\.module\.(sa|sc|c)ss$/;

module.exports = {
  entry: [joinClient('index.js')],
  output: {
    publicPath: publicPath,
    path: joinProd(),
    filename: 'src/[name].[hash:5].js',
    chunkFilename: 'src/[name].[chunkhash:5].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter'),
            fix: true,
            emitWarning: true,
            quiet: false
          }
        },
        enforce: 'pre',
        exclude: [],
        include: [joinClient()]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }]
      },
      {
        test: lessModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:5]'
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          'resolve-url-loader',
          'less-loader'
        ]
      },
      {
        test: sassModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:5]'
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      {
        test: lessRegex,
        exclude: lessModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          'resolve-url-loader',
          'less-loader'
        ]
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'img/[name].[hash:5].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:5].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.scss', '.less', '.css'],
    modules: ['node_modules'],
    alias: {
      '@root': joinClient(),
      '@public': joinClient('public'),
      '@redux': joinClient('redux'),
      '@utils': joinClient('utils'),
      '@components': joinClient('components'),
      '@containers': joinClient('containers'),
      '@message': joinClient('message'),
      '@services': joinClient('services'),
      '@history': joinClient('history.js')
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [joinProd('**/*')],
      dry: false,
      dangerouslyAllowCleanPatternsOutsideProject: true
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:5].css',
      chunkFilename: 'css/[name].[chunkhash:5].css'
    }),
    new HtmlWebpackPlugin({
      favicon: joinClient('public/img/favicon.ico'),
      template: joinClient('public/index.html'),
      filename: 'index.html',
      basePath: publicPath,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      }
    })
    // new SassLintPlugin()
  ]
};
