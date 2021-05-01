import { defineConfig } from 'dumi';
import { resolve } from 'path';

export default defineConfig({
  // favicon:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  // logo:
  //   'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  alias: {
    '@budlocks/comps': resolve(
      __dirname,
      './packages/comps/src',
    ),
    '@budlocks/hooks': resolve(__dirname, './packages/hooks/src'),
  },
  resolve: {
    includes: [
      'docs',
      'packages/hooks/src',
      'packages/comps/src',
    ],
  },
  locales: [['zh-CN', '中文']],
  navs: {
    'en-US': [
      null,
      {
        title: 'GitLab',
        path: '',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitLab',
        path: '/select',
      },
    ],
  },
  extraBabelPlugins: [
    [
      'import', 
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      } 
    ]
  ]
});
