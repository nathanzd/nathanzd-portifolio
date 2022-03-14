const HtmlWebpackPlugin=require('html-webpack-plugin');
const path=require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 3000,
    proxy: {
        '/**': {
          target: 'http://localhost:8080',
          secure: false,
          changeOrigin: true,
          headers: {
                 Connection: 'keep-alive'
          }}
    }
    },
    module:{
      rules:[
        {
          test:/\.js$/,
          exclude:/node_modules/,
          use:{
            loader:'babel-loader',
            options:{
              presets:'babel-preset-react'
            }
          }
        },
        {
          test:/\.css$/,
          //A ordem importa :)
          use:[{loader:'style-loader'
          },{loader:'css-loader',options:{modules:'local',import:true}}]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use:[
            {
            loader: 'file-loader',
            }]
        },

          
        
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
        new MiniCssExtractPlugin({
          filename: "style.css"
        })
      ]
    
}