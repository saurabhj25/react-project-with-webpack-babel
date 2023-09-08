module.exports = {
  env: {
    browser: true,
    // ESLint will be aware of common global variables available in web browsers, such as document,
    // window, console, alert, and others. This means ESLint won't raise warnings or errors
    // when you use these variables in your code.
  },
  parser: '@babel/eslint-parser',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
        //This part of the configuration tells ESLint to use the configuration options from your Prettier
        //configuration file (.prettierrc or .prettierrc.json) when applying the Prettier rules. It ensures
        //that ESLint aligns with your Prettier configuration.
      },
    ],
    'react/prop-types': 2,
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 0,
    'arrow-body-style': 'off',
    'react/self-closing-comp': 'warn',
    'no-undef': 'warn',
  },
};
