const { VantResolver } = require('@vant/auto-import-resolver');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:1323',
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        },
      },
    },
  },
};
