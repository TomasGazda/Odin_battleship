const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
    },
     devtool: 'inline-source-map',
     devServer: {
            static: './dist',
      },
   plugins: [
     new MiniCssExtractPlugin(),
     new HtmlWebpackPlugin({
       template:'./src/assets/index.html'
     })
   ],
   
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'src/assets/[name].[ext]',
      clean:true,
      
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            },
        ],
      },
 };