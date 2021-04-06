import {Graph} from './graph'
import {ITraverseFn} from './types'

import {collect} from '~/utils'

export function collectEdges<V = unknown, K extends string = string>(
  edge: K,
  graph: Graph<V, K>,
  process: ITraverseFn<V, K>
): K[] {
  return collect((onVisit) => process(edge, graph, onVisit))
}
