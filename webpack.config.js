const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'source-map' : false,

  context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js',
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
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
            filename: './img/[path][name][ext]',
        },
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
          title: '',
          template: './index.html',
          // inject: 'body'
        }),
        // new MiniCssExtractPlugin({
        //   filename: 'style.css'
        // }),
        new CopyPlugin({
          patterns: [
              {
                from: path.resolve(__dirname, 'src/layout/pages/home/section_3/img'),
                to:   path.resolve(__dirname, 'docs/img/pats')
              }
            ]
        })
     ],
});