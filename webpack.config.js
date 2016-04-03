var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:  './src',
    output: {
      path: './dist', //output folder
      filename: 'bundle.[hash].js', //output filename
      publicPath: '/', //path where webpack will look for the bundle
    },
    module: {
      loaders: [
        {
          test: /\.js/,
          loader: 'babel',
          exclude: /node-modules/,
          include: __dirname + '/src'
        },
        // css-loader => resolves imports and url(...)s
        // style-loader => inject styles to the page
        //  - modules: enable the css-module spec. use :global to expose reusable css
        { test: /\.css$/, loader: "style!css?modules" }
      ]
    },
    plugins: [new HtmlWebpackPlugin()] // Generate an index.html for the app
};