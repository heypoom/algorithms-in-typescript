import {Graph} from './graph'

export function bfs<V = unknown, K extends string = string>(
  source: K,
  graph: Graph<V, K>,
  onVisit: (edge: K) => void
) {
  const visited: Partial<Record<K, boolean>> = {}

  let stack = [...graph.edgeOf(source)]

  while (stack.length > 0) {
    const edge = stack.shift()
    if (!edge) continue

    onVisit?.(edge)

    // Prevents infinite loop caused by Graph cycles
    if (visited[edge]) continue
    visited[edge] = true

    // Append the node's edges to the stack.
    const edges = graph.edgeOf(edge)
    stack = [...stack, ...edges]
  }
}
