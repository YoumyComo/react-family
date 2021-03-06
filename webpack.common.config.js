const path = require('path');
const webpack = require('webpack'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

commonConfig = {
  entry: {
    app: [
     path.join(__dirname, 'src/index.js'),
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
  	rules: [{
  		 test: /\.js$/,
         use: ['babel-loader?cacheDirectory=true'],
         include: path.join(__dirname, 'src')
     },{
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        	}
      	}]
       },

  	]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
    new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),

  ],
  resolve: {
    alias: {
      pages: path.join(__dirname,'src/pages'),
      component: path.join(__dirname,'src/component'),
      router: path.join(__dirname,'src/router'),
      actions: path.join(__dirname, 'src/redux/actions'),
      reducers: path.join(__dirname, 'src/redux/reducers')
    }
  },
}
module.exports = commonConfig;