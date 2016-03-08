var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  './src',
    output: {
        path:     './dist', //output folder
        filename: 'bundle.[hash].js', //output filename
        publicPath: '/', //path where webpack will look for the bundle
    },
    module: {
      loaders: [
        {
          test: /\.js/,
          loader: 'babel',
          exclude: /node-modules/,
          include: __dirname + '/src',
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin()]
};