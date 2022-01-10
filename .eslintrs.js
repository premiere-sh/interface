module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'react-native', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 1,
    'react/forbid-foreign-prop-types': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-native/no-unused-styles': 2,
    'jsx-a11y/label-has-for': 'off',
    'arrow-parens': 'off',
    'import/no-dynamic-require': 'off',
    'import/prefer-default-export': 'off',
    'react/display-name': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    camelcase: 'off',
    quotes: [2, 'double'],
    semi: [2, 'never'],
    'comma-dangle': 0,
    indent: 0,
    'global-require': [0],
    'no-console': 'off'
  },
  globals: {
    fetch: false
  }
}
