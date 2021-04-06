export interface INode<T> {
  value: T
  left?: INode<T> | null
  right?: INode<T> | null
}

export enum Algo {
  /** Recursive depth-first search */
  DFS,

  /** Stack-based depth-first search */
  DFSS,

  /** Breadth-first search */
  BFS,
}

export enum Order {
  Pre,
  In,
  Post,
}
