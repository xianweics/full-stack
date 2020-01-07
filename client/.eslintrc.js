module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['react'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: 'standard',
  env: {
    browser: true,
    jest: true,
    node: true,
    commonjs: true
  },
  globals: {
    __dirname: true,
    document: true,
    window: true
  },
  rules: {
    semi: [1, 'always'],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'eol-last': 0,
    'no-trailing-spaces': "off"
  }
};
