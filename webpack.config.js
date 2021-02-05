//

//plugins
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//config
module.exports = {
  mode: "development",
  entry: "./src/index.ts",

  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: "index.[contenthash].css" }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],

  module: {
    rules: [
      //tx-tsx
      {
        test: /\.(ts|tsx)$/,
        use: ["ts-loader"],
        include: [path.resolve(__dirname, "src")],
      },
      //css
      {
        test: /.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      }, //css
    ], //rules
  }, //modules

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  devServer: {
    open: true,
    host: "localhost",
  },
};