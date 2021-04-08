import {N, collect, bfs, dfss, dfs, Order, traverse, Algo} from '~/binary-tree'

/**
       A
     B   C
    D E F G
  */
const createTree = () => N('A', N('B', N('D'), N('E')), N('C', N('F'), N('G')))

describe('Binary Tree Breadth-First Search', () => {
  it('can do breadth-first search', () => {
    const nodes = collect(createTree(), bfs) //?

    expect(nodes.join('')).toBe('ABCDEFG')
  })
})

describe('Binary Tree Depth-First Search', () => {
  it('can do pre-order depth-first search', () => {
    const nodes = collect(createTree(), dfs, Order.Pre) //?.

    expect(nodes.join('')).toBe('ABDECFG')
  })

  it('can do in-order depth-first search', () => {
    const nodes = collect(createTree(), dfs, Order.In)

    expect(nodes.join('')).toBe('DBEAFCG')
  })

  it('can do post-order depth-first search', () => {
    const nodes = collect(createTree(), dfs, Order.Post)

    expect(nodes.join('')).toBe('DEBFGCA')
  })

  it('can do in-order depth-first search with stack', () => {
    const nodes = collect(createTree(), dfss)

    expect(nodes.join('')).toBe('DBEAFCG')
  })
})
