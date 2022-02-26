import { Configuration, WebpackPluginInstance } from "webpack";
import BrowserSyncPlugin from "browser-sync-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { config, baseDirectory } from "./webpack.config.common";

const dev: Configuration & { devServer: DevServerConfiguration } = {
  ...config,
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    hot: true,
    port: 9001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home",
      hash: true,
      filename: "index.html",
      chunks: ["main"],
      template: `./${baseDirectory}/assets/html/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "style.css",
    }),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:9001",
      },
      { reload: false },
    ) as unknown as WebpackPluginInstance,
  ],
};

export default dev;
