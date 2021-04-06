import {INode} from '../types'

/** Stack-based in-order DFS implementation. */
export function dfss<T>(root: INode<T>, onEnter: (value: T) => void) {
  const stack: INode<T>[] = []
  let current: INode<T> | null = root

  while (true) {
    if (current) {
      stack.push(current)
      current = current.left ?? null
    } else if (stack.length > 0) {
      const node = stack.pop()
      current = node ?? null

      if (current?.value) onEnter(current?.value)
      current = current?.right ?? null
    } else break
  }
}
