import { resolve } from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';
import Dotenv from 'dotenv-webpack';

export default ({ mode }: { mode: Configuration['mode'] }): Configuration => ({
  target: 'web',
  mode,
  context: resolve('src'),
  entry: {
    app: './index.ts',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [resolve(__dirname, '../../src'), resolve(__dirname, '../../node_modules')],
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'babel-loader' }],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv({
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: 'auto',
    }),
  ],
});
