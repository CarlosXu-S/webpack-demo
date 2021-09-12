const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[contenthash].js",
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "徐雙冰",
      template: "src/assets/index.html",
    }),
  ],
};
