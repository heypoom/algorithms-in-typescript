import {Graph} from '../graph'

import {trims} from '~/utils'

export function parseDot<V = unknown, K extends string = string>(
  markup: string,
  graph: Graph<V, K>
): Graph<V, K> {
  const statements = trims(markup.split('\n'))

  for (let statement of statements) {
    const edges = trims(statement.split('->')) //?

    const targets = edges.map((edge) => {
      if (!edge.includes(',')) return edge as K

      return trims(edge.split(',')) as K[]
    })

    graph.chain(...targets)
  }

  return graph
}
