import {bfs} from './fn/bfs'

import {INode, Order} from './types'

export function collect<T>(
  node: INode<T>,
  scanner = bfs,
  order = Order.In
): T[] {
  const values: T[] = []
  scanner(node, (v) => values.push(v), order)

  return values
}
