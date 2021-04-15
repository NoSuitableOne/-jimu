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
  type: 'rollup'
};

const cjs = {
  type: 'rollup'
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
