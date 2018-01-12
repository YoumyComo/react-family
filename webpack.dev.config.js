'use strict';
const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
         'react-hot-loader/patch',
          path.join(__dirname, 'src/index.js'),
        ]
  },
  output: {
    // path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    // chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
     },{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
     },
     ]
 },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    proxy: {
            "/api/*": "http://localhost:8090/$1"
    }
  },
  
  
}
// ??????????
module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);