/**
 * Created by feng on 2017/12/1.
 */

let path = require('path');
let extractTextWebpackPlugin = require('extract-text-webpack-plugin');
let extract = new extractTextWebpackPlugin('build.css');

module.exports = {
  entry : {
    one : __dirname + "/one/js/index.js",
    two : __dirname + "/two/js/index.js"
  },
  output : {
    path : __dirname + "/build",
    filename : "[name].js"
  },
  devtool : 'source-map',
  devServer : {
    contentBase : "./one",
    historyApiFallback : true,
    inline : true,
    hot : true
  },
  module : {
    rules : [
      {
        test : /(\.js|\.jsx)$/,
        use : {
          loader : 'babel-loader',
          options : {
            presets : ["es2015"]
          }
        },
        exclude : '/node_modules/'
      },
      {
        test : /\.css$/,
        use : extract.extract({
          fallback : 'style-loader',
          use : [{
            loader : 'css-loader',
            options : {
              module : true
            }
          }, {
            loader : 'postcss-loader',
            options : {
              plugins: [
                require('autoprefixer')
              ]
            }
          }
          ]
        })

      }

    ]
  },
  plugins:[
    extract
  ]

}




