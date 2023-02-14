const path = require('path');
// const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');;
process.env.NODE_ENV = 'production';

module.exports = {
  name: 'number-baseball-setting',
  mode: 'production',
  devtool: 'hidden-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: {
    app: ['./client'],
  },

  module: {
    rules: [{
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
                // 'react-refresh/babel',
            ],
        },
    }]
  },
  plugins: [
    // new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist',
},
devServer: {
    devMiddleware: {publicPath: '/dist/',},
    static: {directory: path.resolve(__dirname)},
    hot: true
  },
};