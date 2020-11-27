import { defineConfig } from 'umi';
import routes from './src/routers/index';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout: {},
  // antd: {},
  // local: {
  //   default: 'zh-CN',
  //   antd: false,
  //   title: false,
  //   baseNavigator: true,
  //   baseSeparator: '-',
  // },
  // layout: {
  //   name: 'Ant Design',
  //   locale: false,
  // },
  routes: routes,
  proxy: {
    '/api': {
      'target': 'https://api.asilu.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
    // '/head': {
    //   'target': 'https://api.uomg.com/api/rand.avatar',
    //   'changeOrigin': true,
    //   'pathRewrite': { '^/head' : '' },
    // },
    '/new': {
      'target': 'http://v.juhe.cn/toutiao/index',
      'changeOrigin': true,
      'pathRewrite': { '^/new' : '' },
    },
    '/joke': {
      'target': 'http://v.juhe.cn/joke/content/list.php',
      'changeOrigin': true,
      'pathRewrite': { '^/joke' : '' },
    },
    '/tianqi': {
      'target': 'http://apis.juhe.cn/simpleWeather/query',
      'changeOrigin': true,
      'pathRewrite': { '^/tianqi' : '' },
    },
  },
});
