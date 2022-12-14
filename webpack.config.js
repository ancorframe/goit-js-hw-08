const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    gallery: "./src/gallery.js",
    video: "./src/video.js",
    feedback: "./src/feedback.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
      inject: "body",
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/gallery.html",
      inject: "body",
      chunks: ["gallery"],
      filename: "gallery.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/video.html",
      inject: "body",
      chunks: ["video"],
      filename: "video.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/html/feedback.html",
      inject: "body",
      chunks: ["feedback"],
      filename: "feedback.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:5].css",
      chunkFilename: "[id].[contenthash:5].css",
    }),
    new CleanWebpackPlugin(),
  ],
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin({})],
  // },
  output: {
    filename: "[name].[hash:5].js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/goit-js-hw-08/",
    // publicPath: "https://github.com/ancorframe/goit-js-hw-08/dist/",
  },
};
