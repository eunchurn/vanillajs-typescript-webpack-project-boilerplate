import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { config, baseDirectory } from "./webpack.config.common";

const prod: Configuration = {
  ...config,
  devtool: "hidden-source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
      new TerserPlugin({ terserOptions: { format: { comments: false } }, extractComments: false }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home",
      hash: true,
      filename: "index.html",
      chunks: ["main"],
      template: `./${baseDirectory}/assets/html/index.html`,
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};

export default prod;
