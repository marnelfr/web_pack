const path = require('path'),
  MiniCssExtract = require('mini-css-extract-plugin'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    hello: './src/hello.js',
    pretre: './src/pretre.js',
    about: './src/about.js'
  },
  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '' //C'est le chemin vers le dossier contenant nos assets (images,...)
  },
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      automaticNameDelimiter: '_'
    }
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
      filename: 'css/[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Hello World',
      chunks: [
        'hello'
        // ,'vendors~hello~pretre' //Il semble que webpack l'inclut par défaut
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
        // ,'vendors~hello~pretre' //Il semble que webpack l'inclut par défaut
      ],
      description: 'Showing the big pretre',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/page-template.hbs',
      title: 'About',
      chunks: [ 'about' ],
      description: 'About our web site'
    })
  ]
}