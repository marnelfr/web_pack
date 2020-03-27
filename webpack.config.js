const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
    new MiniCssExtract({
      filename: 'style.css'
    })
  ]
}