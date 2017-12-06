/**
 * Created by feng on 2017/12/1.
 */

const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
let extractTextWebpackPlugin = require('extract-text-webpack-plugin');
let extract = new extractTextWebpackPlugin('build.css');

module.exports = {
  entry : {
    one : __dirname + "/one/js/one.js",
    two : __dirname + "/two/js/two.js"
  },
  output : {
    path : __dirname + "/build",
    filename : "[name].js"
  },
  devtool : 'source-map',

  module : {
    rules : [
      {
        test : /(\.js|\.jsx)$/,
        use : {
          loader : 'babel-loader'
        },
        exclude : '/node_modules/'
      },
      {
        test : /\.css$/,
        use : extract.extract({  //分离css代码
          fallback : 'style-loader',
          use : [{
            loader : 'css-loader'
          }, {
            loader : 'postcss-loader',
            options : {
              plugins: [
                require('autoprefixer') //添加css前缀
              ]
            }
          }
          ]
        })

      }

    ]
  },
  plugins:[
    new extractTextWebpackPlugin('build.css'),
    new webpack.BannerPlugin('版权所有！！！'),
    new htmlWebpackPlugin({
      filename:'one.html',  //输出文件的名字，不写默认index.html
      template:'./one/one.html',  //模板html路径
      chunks:['one']  //指定当前html要引入的文件（entry的文件名）
    }),
    new htmlWebpackPlugin({
      filename:'two.html',   //输出文件的名字，不写默认index.html
      template:'./two/two.html', //模板html路径
      chunks:['two']  //指定当前html要引入的文件（entry的文件名）
    })
  ]

}




