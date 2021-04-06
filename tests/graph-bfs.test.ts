import {bfs, createGraph} from '~/graph'

import {collect} from '~/utils'

function createLinearGraph() {
  const graph = createGraph({A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7})
  graph.chain('A', 'B', 'C', 'D', 'E', 'F', 'G')

  return graph
}

describe('Linear Graph Breadth-First Search', () => {
  it('can search linear graph with class methods', () => {
    const graph = createLinearGraph()

    const edgesA = graph.collect('A', graph.bfs) //?
    expect(edgesA.join('')).toBe('ABCDEFG')

    const edgesB = graph.collect('D', graph.bfs) //?
    expect(edgesB.join('')).toBe('DEFG')
  })

  it('can search linear graph with utility functions', () => {
    const graph = createLinearGraph()

    const edgesA = collect((onVisit) => bfs('A', graph, onVisit)) //?
    expect(edgesA.join('')).toBe('ABCDEFG')

    const edgesB = collect((onVisit) => bfs('D', graph, onVisit)) //?
    expect(edgesB.join('')).toBe('DEFG')
  })
})

describe('Complex Graph Breadth-First Search', () => {
  it('should be able to search cyclic graphs', () => {
    const graph = createGraph({A: 1, B: 2, C: 3})
    graph.chain('A', 'C')
    graph.chain('C', 'A', 'B')

    const edges = graph.collect('A', graph.bfs) //?
    expect(edges.join('')).toBe('ACB')
  })
})
