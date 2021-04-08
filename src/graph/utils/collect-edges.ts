import {Graph} from '../graph'
import {ITraverseFn} from '../types'

import {collect, dedupe} from '~/utils'

export const collectEdges = <V = unknown, K extends string = string>(
  edge: K,
  graph: Graph<V, K>,
  process: ITraverseFn<V, K>
): K[] => dedupe(collect((onVisit) => process(edge, graph, onVisit)))
