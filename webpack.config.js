var path = require('path')
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
  entry: 
    './src/index.js'   //入口js
,
  output: {
    path:path.resolve(__dirname,'dest'), 
    filename: "bundle.js",   //总出口js
    publicPath:'http://localhost:8050'
  },

  module:{
    loaders: [
        {
          test: /muse-ui.src.*?js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader?presets=es2015',   //npm install -d --save-dev babel-preset-es2015
          exclude: /node_modules/
        },
        {
          test:/\.css$/,
          loader:"style-loader!css-loader"
        },
        {
          test: /\.less$/, 
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test:/.(png)|(jpg)$/,
          loader: 'url-loader?limit=10000&name=img/[name].[ext]'   //10k以下图片变成base64
        }
    ]
  },
    //run time only build use vue.common.js
      resolve: {
        extensions: ['.js'],
        alias: {
            'vue': 'vue/dist/vue.common.js'
        }
    },
    // vue:{
    //       loaders:{
    //         js:'babel-loader'
    //       }
    // },
    devServer: 
        {
          contentBase: path.join(__dirname, "dest"),
          compress: true,
          port: 8050
        }
    }

// var deps = [ 
//   'bower_components/reactx/react.js',
//   'bower_components/reactx/react-dom.js'
// ];

// deps.forEach(function (dep) {
//   var depPath = path.resolve(__dirname,dep);
//   // config.resolve.alias[dep.split(path.sep)[0]] = depPath;
//   config.module.noParse.push(depPath);
// });
console.log("----------have fun----------")
module.exports = config;
