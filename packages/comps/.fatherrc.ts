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

const esm = {
  type: 'babel'
};

const cjs = {
  type: 'babel'
};

const umd = {
  name: 'jimu',
  sourcemap: true,
  globals: {
    "react": 'React',
    "react-dom": 'ReactDOM',
    "antd": 'antd'
  },
  minFile: true
};

export default {
  ...common,
  esm: {...esm},
  cjs: {...cjs},
  umd: {...umd}
};
