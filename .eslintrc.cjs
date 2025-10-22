module.exports = {
  root: true,
  parserOptions: {
    project: ['./tsconfig.json']
  },
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: [],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@next/next/no-img-element': 'off'
  }
};
