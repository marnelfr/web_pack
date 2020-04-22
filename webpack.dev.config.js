const path = require('path'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  distFolder = path.resolve(__dirname, './dist'),
  webpack = require('webpack')

module.exports = {
  entry: {
    'hello': './src/hello.js',
    'about': './src/about.js',
    'pretre': './src/pretre.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: distFolder,
    publicPath: '' //C'est le chemin vers le dossier contenant nos assets (images,...)
  },
  mode: 'development',
  devServer: {
    contentBase: distFolder,
    index: 'index.html',
    port: 8000
  },
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
          'style-loader' ,'css-loader'
        ]
      }*/,{
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
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
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['hello'],
      title: 'Hello World',
      description: 'Trying to understand how to use webpack',
      template: 'src/page-template.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      chunks: ['about'],
      title: 'About',
      description: 'About the application',
      template: 'src/page-template.hbs'
    }),
    new HtmlWebpackPlugin({
      filename: 'pretre.html',
      chunks: ['pretre'],
      title: 'Pretre',
      description: 'Pretre',
      template: 'src/page-template.hbs'
    })
  ]
}