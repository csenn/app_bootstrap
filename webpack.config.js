const path = require('path')

module.exports = {
  entry: {
    index: './client/index.js'
  },
  output: {
    path: path.join(__dirname, 'public', 'build'),
    publicPath: '/build',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    // stats: 'errors-only',
    port: '9222',
    proxy: {
      '*': { target: 'http://localhost:8000' }
    }
  }
}
