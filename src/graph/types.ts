import {Graph} from './graph'

export type EdgeOf<T> = T extends Graph<unknown, infer K> ? K : never

export type ITraverseFn<V = unknown, K extends string = string> = (
  source: K,
  graph: Graph<V, K>,
  onVisit: (edge: K) => void
) => void
