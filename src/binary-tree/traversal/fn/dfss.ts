import {INode} from '../types'

/** Stack-based in-order DFS implementation. */
export function dfss<T>(node: INode<T>, onEnter: (value: T) => void) {
  const stack: INode<T>[] = []
  let current = node

  while (true) {
    if (current) {
      stack.push(current)
      current = current.left
    } else if (stack.length > 0) {
      current = stack.pop()
      onEnter(current?.value)
      current = current.right
    } else break
  }
}
