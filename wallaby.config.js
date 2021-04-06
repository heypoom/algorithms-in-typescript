module.exports = function (w) {
  return {
    files: ['src/*.ts', 'src/**/*.ts'],

    tests: [
      'tests/*.ts',
      'tests/**/*.ts',
      'tests/**/__tests__/*.ts',
      'src/**/*.test.ts',
    ],

    env: {
      type: 'node',
    },
  }
}
