module.exports = {
    // Airbnb is the base, prettier is here so that eslint doesn't conflict with prettier
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'react-native'],
  rules: {
    'no-console': 'off',
           // Lines will be broken before binary operators
    'operator-linebreak': ['error', 'before'],
           // Allow imports from dev and peer dependencies
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: true, peerDependencies: true },
    ],
    'react/jsx-filename-extension': 'error',
           // This rule doesn't play nice with Prettier
    'react/jsx-one-expression-per-line': 'off',
           // This rule doesn't play nice with Prettier
    'react/jsx-wrap-multilines': 'off',
           // Remove this rule because we only destructure props, but never state
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.android.js',
          '.ios.js',
          '.jsx',
          '.android.jsx',
          '.ios.jsx',
          '.tsx',
          '.ts',
          '.android.tsx',
          '.android.ts',
          '.ios.tsx',
          '.ios.ts',
        ],
      },
    },
  },
};
