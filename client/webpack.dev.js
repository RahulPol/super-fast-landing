const path = require("path");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
  // This will tell webpack to run in development mode so your files won't be minified.
  mode: "development",

  output: {
    filename: "index.js" /** The output file of your compilation */,
    path: path.resolve(__dirname, "build") /** Location of output file */,
  },

  // spin dev server for local testing
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
  },
});
