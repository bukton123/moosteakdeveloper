const fs = require('fs')
const path = require('path')
const rmdir = require('rmdir')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SWPrecacheWebpackPlugin  = require('sw-precache-webpack-plugin')
const WorkboxBuildWebpackPlugin = require('workbox-webpack-plugin')

rmdir('./dist')

module.exports = {
  devtool: 'cheap-module-source-map',
  // devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      chunksSortMode: 'dependency',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new CopyWebpackPlugin([
      { from: 'static', to:  'static/'},
      { from: 'manifest.json', to: 'manifest.json'},
    ]),
    // new SWPrecacheWebpackPlugin({
    //   cacheId: 'HiewJung',
    //   filename: 'service-worker.js',
    //   navigateFallback: '/index.html',
    //   mergeStaticsConfig: true,
    //   runtimeCaching: [
    //     {
    //       urlPattern: '/',
    //       handler: 'networkFirst', //cacheFirst
    //     },
    //     {
    //       urlPattern: '/dashboard',
    //       handler: 'networkFirst',
    //     }
    //   ],
    //   staticFileGlobs: [
    //     'dist/**/*.{js,html,css,json}',
    //     'dist/static/asste/plugin/**.*',
    //     'dist/static/asste/images/*.*',
    //     'dist/static/asste/fonts/*.*',
    //     'dist/static/icon/*.*'
    //     ],
    //   minify: true,
    //   stripPrefix: 'dist/',
    //   staticFileGlobsIgnorePatterns: [
    //     /\.map$/,
    //     /asset-manifest\.json$/,
    //     /\less$/,
    //     /\scss$/
    //   ],
    // }),
    new WorkboxBuildWebpackPlugin({
      //  swSrc: 'service-worker.js',
      globDirectory: './dist/',
      globPatterns: [
        '**/*.{html,json,css,png,ttf,woff,woff2,jpg,js,eot,svg,otf}',
        // './dist/static/asste/fonts/*.*',
        // 'dist/static/asste/images/*.png',
        // 'dist/static/icon/*'
      ],
      runtimeCaching: [
        {
          urlPattern: "/",
          handler: 'networkFirst',
        },
        {
          urlPattern: '/dashboard',
          handler: 'networkFirst',
        }
      ],
      swDest: './dist/service-worker.js'
    })
  ]
}