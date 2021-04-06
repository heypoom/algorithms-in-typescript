import {INode} from './types'

export const N = <T>(
  value: T,
  left: INode<T> = null,
  right: INode<T> = null
): INode<T> => ({
  value,
  left,
  right,
})
