const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  devtool: "eval-source-map",
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
};
