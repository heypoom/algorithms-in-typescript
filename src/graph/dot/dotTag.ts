import {createGraph, Graph} from '../graph'

export function dot<T = unknown, K extends string = string>(
  strings: TemplateStringsArray,
  ...args: K[]
): Graph<T, K> {
  const graph = createGraph<T, K>({} as Record<K, T>)

  return graph.dot(strings, ...args)
}
