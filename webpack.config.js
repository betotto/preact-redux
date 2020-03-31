const path = require('path');

const config = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.jsx|.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            ['@babel/plugin-transform-react-jsx', {
              pragma: 'h',
              pragmaFrag: 'Fragment'
            }]
          ],
          presets: [
            ['@babel/env', {
              targets: {
                chrome: 58,
                ie: 11
              }
            }]
          ]
        }
      }
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat'
    }
  },
  devtool: 'none'
};

if(process.env.NODE_ENV === 'development') {
  config.devtool = 'source-map';
  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  };
}

module.exports = config;
