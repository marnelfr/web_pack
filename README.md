# web_pack
Learning webpack

#### CSS Import
"css-loader": "^3.4.2", //Permet l'importation des fichiers css\
"style-loader": "^1.1.3", //Permet l'introdution de nos fichier css directement dans le head entre les balises styles

#### SASS Import
"node-sass": "^4.13.1", //Core component, je pense\
"sass-loader": "^8.0.2", //Permet d'importer les fichier scss

#### Assets (Images,...) Import
"file-loader": "^6.0.0", //Permet l'importation des assets comme les images

#### Babel usage
npm install @babel/core babel-loader @babel/preset-env babel-plugin-transform-class-properties --save-dev

NPM install: failed, reason: self signed certificate in certificate chain\
npm config set strict-ssl false

#### Adding TerserPlugin to minifiy the build
npm install terser-webpack-plugin --save-dev

#### Adding MiniCssExtractor to extract our css into a style file
npm install mini-css-extract-plugin --save-dev

#### The way to clean dist folder before build if using contenthash
npm i clean-webpack-plugin -D
> The directory that should be clean can be specify: new CleanWebpackPlugin(['dist', 'src/trash'])

#### The index.html file too can be generated and contain the corrects js and css built
npm i html-webpack-plugin -D

#### Using template with webpack need a templating. One of them is handlebars
npm i handlebars-loader handlebars -D

#### Webpack mode option allow setting production or development mode. production mode enable terserPlugin. Development mode don't

#### It's better to split our dev and production webpack configuration.

#### We can use webpack-dev-server to make faster our code writting.
npm i webpack-dev-server -D

#### Using bootstrap

#### Using fontawesome
npm install --save-dev @fortawesome/fontawesome-free
and I added to index.js
> import '@fortawesome/fontawesome-free/js/fontawesome'\
> import '@fortawesome/fontawesome-free/js/solid'\
> import '@fortawesome/fontawesome-free/js/regular'\
> import '@fortawesome/fontawesome-free/js/brands'

async/await in class usage need to install
    npm install --save-dev @babel/plugin-transform-runtime //for dev mode\
    npm install --save @babel/runtime //for prod mode\
  and add it into babel plugins:
    `{
      "plugins": ["@babel/plugin-transform-runtime"]
    }`
  
  and set useBuiltIns to usage for the presets
    `presets: [[
      '@babel/env',
      {
        "useBuiltIns": "usage"
      }]
    ]`
