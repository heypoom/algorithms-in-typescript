module.exports = () => {
  return {
    autoDetect: true,

    env: {
      params: {
        runner: '--experimental-vm-modules',
      },
    },

    files: ['src/**/*.ts', 'tests/**/.ts'],
    tests: ['tests/**/*.ts', 'src/**/__tests__/*.ts', 'src/**/*.test.ts'],

    env: {
      type: 'node',
    },
  }
}
