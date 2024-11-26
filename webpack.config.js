const path = require("path");

module.exports = {
  entry: "./assets/src/js/index.js", // Entry point untuk JavaScript Anda
  output: {
    path: path.resolve(__dirname, "apps/static/src/js"), // Output folder
    filename: "bundle.js", // Nama file hasil
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"], // Use PostCSS to process Tailwind], // Loader untuk file CSS
      },
    ],
  },
  devServer: {
    contentBase: "./apps/static", // Serve static files from this directory
    hot: true, // Enable hot module replacement
  },
  mode: "development", // Mode: development atau production
};
