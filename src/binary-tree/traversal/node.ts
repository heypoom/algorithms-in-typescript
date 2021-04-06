import {INode} from './types'

export const N = <T>(
  value: T,
  left: INode<T> | null = null,
  right: INode<T> | null = null
): INode<T> => ({
  value,
  left,
  right,
})
