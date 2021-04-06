import {Config} from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,

    moduleNameMapper: {
      '~/(.*)': ['<rootDir>/src/$1'],
      '@/(.*)': ['<rootDir>/src/$1'],
    },
  }
}
