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
          test: /\.js/,
          loader: 'babel',
          exclude: /node-modules/,
          include: __dirname + '/src',
          query: {
            presets: ['es2015','react']
          }
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin()]
};