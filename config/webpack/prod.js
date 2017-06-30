const fs = require('fs')
const path = require('path')
const rmdir = require('rmdir')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SWPrecacheWebpackPlugin  = require('sw-precache-webpack-plugin')

rmdir('./dist')

module.exports = {
  // devtool: 'cheap-module-source-map',
  devtool: 'eval',
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
    new SWPrecacheWebpackPlugin({
      cacheId: 'HiewJung',
      filename: 'service-worker.js',
      staticFileGlobs: ['dist/**/*.{js,html,css,json}'],
      minify: true,
      stripPrefix: 'dist/',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new CopyWebpackPlugin([
      { from: 'static', to:  'static/'},
      // { from: 'firebase-mess.js', to: 'firebase-mess.js'},
      // { from: 'firebase-noit.js', to: 'firebase-noit.js'},
      { from: 'manifest.json', to: 'manifest.json'},
      // { from: 'service-worker.js', to:  'service-worker.js'},
      // { from: 'node_modules/workbox-sw/build/importScripts', to:  'static/js'},
    ])
  ],
}