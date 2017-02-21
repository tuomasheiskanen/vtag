const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtools: 'cheap-module-eval-source-map',
    entry:  './src/index.js',
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
        { test: /\.css$/, loader: "style!css?modules" },
        // {
        //   test: /\.css$/,
        //   loader: ExtractTextPlugin.extract('style', 'css'),
        //   include: __dirname + '/src'
        // }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(), // Generate an index.html for the app
      // new ExtractTextPlugin('[name].[chunkhash].css')
    ]

};