//

//plugins
const path = require("path");
const webpack = require("webpack");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//config
module.exports = {
  mode: "development",
  entry: { bundle: "./src/app.tsx" },

  plugins: [
    new webpack.ProgressPlugin(),
    // new MiniCssExtractPlugin({ filename: "index.[contenthash].css" }),
    new HtmlWebpackPlugin({
      template: "src/app.html",
    }),
  ],

  devtool: "inline-source-map",
  devServer: {},

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
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          "style-loader",
          "css-loader",
        ],
      },
      //images/*
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
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
