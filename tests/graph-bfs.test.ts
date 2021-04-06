import {createGraph, collect, bfs} from '@graph'

describe('Graph Breadth First Search', () => {
  it('should work', () => {
    const graph = createGraph({A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7})
    graph.chain('A', 'B', 'C', 'D', 'E', 'F', 'G')

    const edges = graph.collect('A', graph.bfs) //?
    console.log(graph.log(edges))

    const edgez = collect((onVisit) => bfs('A', graph, onVisit)) //?
  })
})
