const path = require('path'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  distFolder = path.resolve(__dirname, './dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
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
    new HtmlWebpackPlugin({
      title: 'Hello World',
      description: 'Trying to understand how to use webpack',
      filename: 'index.html',
      template: 'src/index.hbs'
    })
  ]
}