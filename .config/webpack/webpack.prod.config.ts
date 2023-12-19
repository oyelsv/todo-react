import { resolve } from 'path';
import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import baseConfig from './webpack.base.config';

export default ({
  mode,
  analyze = false,
}: {
  mode: 'production';
  analyze: boolean;
}): Configuration => {
  const base = baseConfig({ mode });

  return {
    ...base,
    devtool: false,
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].bundle.js',
      path: resolve('dist'),
      publicPath: '/',
      clean: true,
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|@reduxjs)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 1,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 0,
          },
        },
      },
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    plugins: [...(base.plugins ?? []), ...(analyze ? [new BundleAnalyzerPlugin()] : [])],
  };
};
