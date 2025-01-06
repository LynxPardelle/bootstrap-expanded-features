const path = require("path");
const webpack = require('webpack');
const WrapperWebpackPlugin = require('wrapper-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  // devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, ""),
    filename: "bootstrap-expanded-features.js",
    library: "bootstrapExpandedFeatures",
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `if (!colors) { let colors = {}; }`,
      raw: true,
      entryOnly: true,
    }),
    new WrapperWebpackPlugin({
      header: ``,
      footer: `\nObject.assign(window, bootstrapExpandedFeatures); pushColors(colors);`,
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            // Configuraciones de compresión
          },
          mangle: {
            reserved: ['let colors = {};'], // Nombres que no deben ser ofuscados
          },
        },
      }),
    ],
  }
};
