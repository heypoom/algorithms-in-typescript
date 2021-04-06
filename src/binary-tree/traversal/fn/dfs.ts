import {INode, Order} from '../types'

/** Recursive in-order DFS implementation. */
export function dfs<T>(
  root: INode<T>,
  onEnter: (value: T) => void,
  order = Order.In
) {
  function w(node: INode<T>) {
    if (!node) return

    if (order === Order.Pre) onEnter(node.value)
    if (node.left) w(node.left)

    if (order === Order.In) onEnter(node.value)
    if (node.right) w(node.right)

    if (order === Order.Post) onEnter(node.value)
  }

  w(root)
}
