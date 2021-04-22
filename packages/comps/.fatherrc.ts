const common = {
  entry: 'src/index.ts',
  runtimeHelpers: true,
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd', 
      libraryDirectory: 'es',
      style: true,
    }],
  ]
};

export default {
  ...common
};
