const path = require("path")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "development",
  entry: "index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
  },
  target: "browserslist",
  module: {
    rules: [
      {
        test: /\.(m?js|ts)$/,
        exclude: {
          and: [/node_modules/], // Exclude libraries in node_modules ...
          not: [
            // Except for a few of them that needs to be transpiled because they use modern syntax
            /vue/,
            /decoders/,
          ],
        },
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                  // debug: true,
                },
              ],
            ],
            sourceType: "unambiguous",
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[chunkhash].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  performance: {
    hints: false,
  },
  devtool: "eval-cheap-module-source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: "tsconfig.json",
        diagnosticOptions: {
          syntactic: true,
        },
      },
    }),
  ],
}
