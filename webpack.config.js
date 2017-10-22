var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // devtool: 'eval-source-map',
  entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch', // 页面局部刷新
      path.join(__dirname, 'app/index.js')
  ],
  output: {
      path: path.join(__dirname, '/dist/'),
      filename: '[name].js',
      publicPath: '/'
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './index.tpl.html',
        inject: 'body',
        filename: './index.html'
      }),
	  new webpack.DefinePlugin({
		  'process.env': {
			  NODE_ENV: '"production"'
		  }
	  }),
	  new webpack.optimize.UglifyJsPlugin({
		  compress: {
			  warnings: false
		  }
	  }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
  ],
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
