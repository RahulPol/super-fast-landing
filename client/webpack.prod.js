const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  // This will tell webpack to run in production mode so your files will be minified.
  mode: "production",

  output: {
    filename:
      "index.[contentHash].js" /** The output file of your compilation */,
    path: path.resolve(__dirname, "build") /** Location of output file */,
  },

  plugins: [new CleanWebpackPlugin()],
});
