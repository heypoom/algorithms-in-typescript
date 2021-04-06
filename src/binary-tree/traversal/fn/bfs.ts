import {INode, Order} from '../types'

/** Breadth-first search. */
export function bfs<T>(
  node: INode<T>,
  onEnter: (value: T) => void,
  order = Order.In
) {
  const stack: INode<T>[] = [node]

  while (true) {
    const node = stack.shift()
    if (!node) break

    onEnter(node.value)

    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
}
