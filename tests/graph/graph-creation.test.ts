import {dot} from '~/graph'

describe('Graph Creation with dot utility', () => {
  it('can link to itself', () => {
    const g = dot`A -> A`

    expect(g.edgeOf('A')).toStrictEqual(['A'])
  })

  it('can link to itself multiple times without duplicate vertices.', () => {
    const g = dot`A -> A, A, A, A, A, A`

    expect(g.edgeOf('A')).toStrictEqual(['A'])
  })

  it('can create linear chained graph', () => {
    const graph = dot`A -> B -> C -> D`

    expect(graph.edgeOf('A')).toStrictEqual(['B'])
    expect(graph.edgeOf('B')).toStrictEqual(['C'])
    expect(graph.edgeOf('C')).toStrictEqual(['D'])
    expect(graph.edgeOf('D')).toStrictEqual([])
  })

  it('can create diamond graph', () => {
    // A -> B | A -> C | B -> D | C -> D
    const graph = dot`A -> B, C -> D`

    expect(graph.edgeOf('A')).toStrictEqual(['B', 'C'])
    expect(graph.edgeOf('B')).toStrictEqual(['D'])
    expect(graph.edgeOf('C')).toStrictEqual(['D'])
    expect(graph.edgeOf('D')).toStrictEqual([])
  })
})
