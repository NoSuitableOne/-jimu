const common = {
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
    "reactROM": 'ReactDOM',
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
