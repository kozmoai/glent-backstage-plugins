module.exports = require('@kozmoai/cli/config/eslint-factory')(__dirname, {
  rules: {
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'request.**.expect'],
      },
    ],
  },
});
