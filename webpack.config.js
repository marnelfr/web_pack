const path = require('path')

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
          'style-loader' ,'css-loader'
        ]
      }
    ]
  }
}