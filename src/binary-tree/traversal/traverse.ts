import {bfs} from './fn/bfs'
import {dfs} from './fn/dfs'
import {dfss} from './fn/dfss'

import {INode, Order, Algo} from './types'

type ITraverseFn<T = unknown> = (
  root: INode<T>,
  onEnter: (value: T) => void,
  order: Order
) => void

interface ITraverseOption {
  algo?: Algo
  order?: Order
}

const traverseFnMap: Record<Algo, ITraverseFn> = {
  [Algo.DFS]: dfs,
  [Algo.DFSS]: dfss,
  [Algo.BFS]: bfs,
}

export function traverse<T>(
  root: INode<T>,
  onEnter: (value: T) => void,
  {algo = Algo.DFS, order = Order.In}: ITraverseOption = {}
) {
  const fn = traverseFnMap[algo] as ITraverseFn<T>

  fn(root, onEnter, order)
}
