const path = require('path'),
  TerserPlugin = require('terser-webpack-plugin'),
  MiniCssExtract = require('mini-css-extract-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/' //C'est le chemin vers le dossier contenant nos assets (images,...)
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
      }
    ]
  },
  plugins: [
    new TerserPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtract({
      filename: 'style.[contenthash].css'
    })
  ]
}