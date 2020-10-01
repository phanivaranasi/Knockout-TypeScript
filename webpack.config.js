const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/components/app.ts'
  },
  devtool: 'source-map', // Generate separate source map files
  devServer: {
    contentBase: './dist',
    overlay: true // Show errors in overlay on the website
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/, // All Knockout.js component HTML templates
        use: 'html-loader' // Adds the component templates to the bundle
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
};