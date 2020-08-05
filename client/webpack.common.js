const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",

  plugins: [
    // The HtmlWebpackPlugin simplifies creation of HTML files, that include a hash in the filename which changes every compilation.
    new htmlWebpackPlugin({
      template: "index.html",
    }),
    // The copyWebpackPlugin used to copy files referred through index.html
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/asset/template"),
          to: path.resolve(__dirname, "build/template"),
        },
      ],
    }),
  ],

  // These options change how modules are resolved.
  resolve: {
    // Add .ts' and '.tsx' as well to resolvable extensions. With this config webpack will resolve .ts & .tsx modules as well.
    extensions: [".ts", ".tsx", ".js"],
  },

  // These options determine how the different types of modules within a project will be treated.
  module: {
    /* Rules contais a test which tests a regulra expression against your code and enforce some rules on it. These rules can modify how the module is created. They can apply loaders to the module, or modify the parser. */
    rules: [
      /* The first rule states, that any file with .ts/.tsx extention should use ts-loader. */

      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      /* The second rule states, all output '.js' files will have any sourcemaps re-processed(as we are already creating source maps, check tsconfig)  by 'source-map-loader'. */
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      /* The third rule states, that whenever webpack come across any image file it should export it into ./dist/img folder with hash attached to it. The hash makes sure that browser always load latest copy of image instead of cached copy. */
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "public/images",
          },
        },
      },
      // I have disabled this rule, as it uses file-loader but in the standard practice it is advised to use style-loader and css-loader for .css files
      // {
      //   test: /\.(css|scss)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[name].[hash].[ext]",
      //       outputPath: "public/styles",
      //     },
      //   },
      // },
      /* The fourth rule combines all .css files and push them at beginning of head tag */
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: function insertAtTop(element) {
                var parent = document.querySelector("head");
                // eslint-disable-next-line no-underscore-dangle
                var lastInsertedElement =
                  window._lastElementInsertedByStyleLoader;

                if (!lastInsertedElement) {
                  parent.insertBefore(element, parent.firstChild);
                } else if (lastInsertedElement.nextSibling) {
                  parent.insertBefore(element, lastInsertedElement.nextSibling);
                } else {
                  parent.appendChild(element);
                }

                // eslint-disable-next-line no-underscore-dangle
                window._lastElementInsertedByStyleLoader = element;
              },
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.woff(\?.+)?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff",
      },
      {
        test: /\.woff2(\?.+)?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff",
      },
      { test: /\.ttf(\?.+)?$/, use: "file-loader" },
      { test: /\.eot(\?.+)?$/, use: "file-loader" },
    ],
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
};
