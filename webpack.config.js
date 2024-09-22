const pathModule = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: "development",
  entry: {
    app: pathModule.resolve(__dirname, "app", "index.js"),
  },
  output: {
    path: pathModule.resolve(__dirname, "public"),
    filename: "bundle.[contenthash].js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  devServer: {
    static: {
      directory: pathModule.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathModule.resolve(__dirname, "app", "index.html"),
      chunks: ["app"],
    }),
    new MiniCssExtractPlugin(),
  ],
};

module.exports = config;
