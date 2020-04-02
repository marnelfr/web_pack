const path = require('path'),
  MiniCssExtract = require('mini-css-extract-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    hello: './src/hello.js',
    pretre: './src/pretre.js'
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '' //C'est le chemin vers le dossier contenant nos assets (images,...)
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: [
          'file-loader'
        ]
      }/*,{
        test: /\.css$/,
        use: [
          MiniCssExtract.loader ,'css-loader'
        ]
      }*/,{
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
    new MiniCssExtract({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Hello World',
      chunks: [
        'hello'
      ],
      description: 'Trying to understand how to use webpack',
      template: 'src/page-template.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'pretre.html',
      template: 'src/page-template.hbs',
      title: 'Grand Prêtre',
      chunks: [
        'pretre'
      ],
      description: 'Showing the big pretre',
    })
  ]
}