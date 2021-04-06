import {bfs, createGraph} from '~/graph'

import {collect} from '~/utils'

describe('Graph Breadth-First Search', () => {
  it('should handle linearly linked graph with class methods', () => {
    const graph = createGraph({A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7})
    graph.chain('A', 'B', 'C', 'D', 'E', 'F', 'G')

    const edgesA = graph.collect('A', graph.bfs) //?
    expect(edgesA.join('')).toBe('BCDEFG')

    const edgesB = graph.collect('D', graph.bfs) //?
    expect(edgesB.join('')).toBe('EFG')
  })

  it('should handle linearly linked graph with utility functions', () => {
    const graph = createGraph({A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7})
    graph.chain('A', 'B', 'C', 'D', 'E', 'F', 'G')

    const edgesA = collect((onVisit) => bfs('A', graph, onVisit)) //?
    expect(edgesA.join('')).toBe('BCDEFG')

    const edgesB = collect((onVisit) => bfs('D', graph, onVisit)) //?
    expect(edgesB.join('')).toBe('EFG')
  })
})
