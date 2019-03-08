/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },  
  resolve: {
    modules: [
      'node_modules/feature',
    ],
    extensions: ['.ts', '.tsx', '.js','.jsx', '.json'],
    symlinks: true,
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: {
          test: /node_modules/,
          not: [/node_modules\/feature/]
        },
        use: {
          loader: require.resolve('babel-loader'),
          options: {
            rootMode: 'upward',
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: true,
      chunks: 'all',
    },
  },
};
