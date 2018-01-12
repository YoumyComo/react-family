'use strict';
const merge = require('webpack-merge');

const webpack = require('webpack'); 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
     },{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
     }, {
        test: /\.(mp4|ogg|svg)$/,
        loader: 'file-loader'
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.*']),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
           }
       }),
    
    new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
    }),
  ]

}
module.exports = merge(commonConfig, publicConfig);