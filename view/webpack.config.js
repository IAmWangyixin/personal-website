const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ThemeColorReplacer = require('webpack-theme-color-replacer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const themeColorList = require('./config/themeColorList');
// import path from path
// import HtmlWebpackPlugin from 'html-webpack-plugin'
// const ThemeColorReplacer = require('webpack-theme-color-replacer');
// import themeColorList from './config/themeColorList'

module.exports = {
  mode: 'development',
  devtool: 'cheap-source-map',
  entry: {
    main: './src/main.tsx',
  },
  devServer: {
    open: true,
    static: './nina',
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.png', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images/',
            limit: 10240,
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(t|j)sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
        enforce: 'pre',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
