import openBrowser from 'react-dev-utils/openBrowser';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const devServer = ({ port }: { port: number }): DevServerConfiguration => ({
  host: '0.0.0.0',
  port,
  hot: true,
  allowedHosts: 'all',
  historyApiFallback: true,
  client: {
    logging: 'error',
    progress: false,
    overlay: {
      errors: true,
      warnings: false,
      runtimeErrors: true,
    },
  },
  onListening: (server) => {
    if (!server) {
      throw new Error('webpack-dev-server is not defined');
    }

    if (openBrowser(`http://localhost:${port}`)) {
      console.log('Listening on port:', `http://localhost:${port}`);
    }
  },
});
