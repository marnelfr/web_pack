const path = require('path'),
  TerserPlugin = require('terser-webpack-plugin'),
  MiniCssExtract = require('mini-css-extract-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '' //C'est le chemin vers le dossier contenant nos assets (images,...)
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.css$/,
        use: [
          MiniCssExtract.loader ,'css-loader'
        ]
      },{
        test: /\.scss$/,
        use: [
          MiniCssExtract.loader, 'css-loader', 'sass-loader'
        ]
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/env' ],
            plugins: [ 'transform-class-properties' ]
          }
        }
      }, {
        test: /\.hbs$/,
        use: [ 'handlebars-loader' ]
      }
    ]
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtract({
      filename: 'style.[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello World',
      description: 'Trying to understand how to use webpack',
      filename: 'index.html',
      template: 'src/index.hbs'
    })
  ]
}