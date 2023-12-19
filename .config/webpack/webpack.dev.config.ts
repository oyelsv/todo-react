import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { Configuration } from 'webpack';

import { devServer } from './devServer';
import baseConfig from './webpack.base.config';

export default ({ mode, port }: { mode: 'development'; port: number }): Configuration => {
  const base = baseConfig({ mode });

  return {
    ...base,
    devtool: 'eval-source-map',
    devServer: devServer({ port }),
    output: {
      publicPath: '/',
      globalObject: 'this',
      filename: '[name].js',
      chunkFilename: '[name].bundle.js',
    },
    optimization: {
      emitOnErrors: true,
    },
    infrastructureLogging: {
      colors: true,
      level: 'warn',
    },
    plugins: [new ReactRefreshWebpackPlugin(), ...(base.plugins ?? [])],
  };
};
