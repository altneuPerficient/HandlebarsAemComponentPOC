var path = require("path");

module.exports = {
  entry: "./src/component/componentName.js",
  output: {
    path: __dirname + "/src/component/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [{
          loader: "handlebars-loader",
          options: {helperDirs: path.resolve(__dirname, "./src/helpers")}
        }]
      }
    ]
  }
};