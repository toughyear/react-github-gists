module.exports = {
  entry: "./src/ReactGithubGists.js",
  output: {
    path: __dirname,
    filename: "main.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["@babel/react", "@babel/env"],
        },
      },
    ],
  },
};
