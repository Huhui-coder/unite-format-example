import { defineConfig } from 'umi';

export default defineConfig({
  layout: {
    name: 'Ant Design',
    locale: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
});
