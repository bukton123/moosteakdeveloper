const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const rmdir = require('rmdir');

const NODE_ENV = process.env.NODE_ENV.trim() === 'production' ? true : false
const build = NODE_ENV ? require('./config/webpack/prod') : require('./config/webpack/dev')
rmdir('./dist')

module.exports = merge( build , {
  devtool: NODE_ENV ? 'eval' : '#eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          formatter: require("eslint-friendly-formatter"),
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: path.join('static', 'js/[name].[hash].js'),
    chunkFilename: path.join('static', 'js/[id].[hash].js')
  },
  devServer: {
    // contentBase: './dist',
    hot: true,
    inline: false,
    historyApiFallback: true,
    // proxy: {
    //   '/api/*': {
    //     target: 'http://139.59.246.7:3000/'
    //   }
    // }
  }
})