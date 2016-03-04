var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  './src',
    output: {
        path:     './builds',
        filename: 'bundle.[hash].js',
        publicPath: '/',
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          test: /\.js/,
          exclude: /node-modules/,
          indluce: __dirname + '/src'
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin()]
};