/**
 * Created by feng on 2017/12/1.
 */

const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
let extractTextWebpackPlugin = require('extract-text-webpack-plugin');
let extract = new extractTextWebpackPlugin('build.css');  //打包后的css文件名

module.exports = {
  entry : {
    one : __dirname + "/one/index.js", //入口文件的路径
    two : __dirname + "/two/index.js",
    vender : ['antd','react','react-dom']
  },
  output : {
    path : __dirname + "/build", //打包后文件的出口
    filename : "[name]/index.js" //[name]全局变量，entry的属性名
  },
  devtool : 'source-map',  //生成map文件，可把报错指向源文件

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
    extract,
    new webpack.BannerPlugin('版权所有！！！'),
    new htmlWebpackPlugin({
      filename:'one/one.html',  //输出文件的名字，不写默认index.html
      template:'./index.html',  //模板html路径
      chunks:['one']  //指定当前html要引入的文件（entry的文件名）
    }),
    new htmlWebpackPlugin({
      filename:'two/two.html',
      template:'./index.html',
      chunks:['two']
    })
  ]

}




