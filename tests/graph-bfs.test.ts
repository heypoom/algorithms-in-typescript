import {createGraph} from '~/graph'

describe('Graph Breadth-First Search', () => {
  it('should handle linearly linked graph', () => {
    const graph = createGraph({A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7})
    graph.chain('A', 'B', 'C', 'D', 'E', 'F', 'G')

    const edgesA = graph.collect('A', graph.bfs) //?
    expect(edgesA.join('')).toBe('BCDEFG')

    const edgesB = graph.collect('D', graph.bfs) //?
    expect(edgesB.join('')).toBe('EFG')
  })
})
