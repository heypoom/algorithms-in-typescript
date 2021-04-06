import {N, collect, bfs, dfss, dfs, Order, traverse, Algo} from '~/binary-tree'

/**
       A
     B   C
    D E F G
  */
const createTree = () => N('A', N('B', N('D'), N('E')), N('C', N('F'), N('G')))

describe('Binary Tree Traversal', () => {
  it('should perform breadth-first search', () => {
    const nodes = collect(createTree(), bfs)

    expect(nodes.join('')).toBe('ABCDEFG')
  })

  it('should perform pre-order depth-first search', () => {
    const nodes = collect(createTree(), dfs, Order.Pre)

    expect(nodes.join('')).toBe('ABDECFG')
  })

  it('should perform in-order depth-first search', () => {
    const nodes = collect(createTree(), dfs, Order.In)

    expect(nodes.join('')).toBe('DBEAFCG')
  })

  it('should perform post-order depth-first search', () => {
    const nodes = collect(createTree(), dfs, Order.Post)

    expect(nodes.join('')).toBe('DEBFGCA')
  })

  it('should perform in-order depth-first search using stack', () => {
    const nodes = collect(createTree(), dfss)

    expect(nodes.join('')).toBe('DBEAFCG')
  })
})
