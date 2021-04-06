import {bfs} from './fn/bfs'
import {INode, Order} from './types'

import {collect as collectList} from '~/utils'

export const collect = <T>(
  node: INode<T>,
  scanner = bfs,
  order = Order.In
): T[] => collectList((onVisit) => scanner(node, onVisit, order))
