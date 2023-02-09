const path = require('path');//модуль node
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, 'src'), //говорит где находятся исжодники
  devtool: 'source-map',
    entry: './index.js',//точка входа в приложение
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js', //cоздаст папку dist, создаст  bundle.js
        clean: true,
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
        // use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {test: /\. (png|jpg|svg|gif)$/,
        loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'images',
          }
      },

      {test: /\. (ttf|woff|woff2|eot)$/i,
        use: [' file-loader']
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {test: /\.s[ac]ss$/i,
      use: [ "style-loader", "css-loader", "sass-loader"]
      // use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
        new HtmlWebpackPlugin({
          title: 'Gem Puzzle',
          template: './index.html',
          inject: 'body'
        }),
        // new MiniCssExtractPlugin({
        //   filename: 'style.css'
        // })
     ],
};