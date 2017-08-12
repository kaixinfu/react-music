module.exports = {
  entry: './app/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query:
          {
            presets:['react','es2015']
          }
      },
      {
          test: /\.css$/,
          loader: "style!css"
      },
      {
          test: /\.less/,
          loader: 'style-loader!css-loader!less-loader'
      }
    ]
  }
}
