import {createGraph} from '~/graph'

describe('Graph Dot Parser', () => {
  it('can parse linear A -> B graph in dot', () => {
    const graph = createGraph({A: 1, B: 2})
    graph.parse('A -> B')

    expect(graph.edgeOf('A')).toStrictEqual(['B'])
  })

  it('can parse cyclic graphs in dot', () => {
    const graph = createGraph({A: 1, B: 2, C: 3, D: 4, E: 5, F: 6})

    const markup = `
      A -> B, C, D, E
      C -> D, B, A
      E -> A, C, E
      F -> A, B
    `

    graph.parse(markup)

    expect(graph.edgeOf('A').join('')).toBe('BCDE')
    expect(graph.edgeOf('C').join('')).toBe('DBA')
    expect(graph.edgeOf('E').join('')).toBe('ACE')
    expect(graph.edgeOf('F').join('')).toBe('AB')
  })
})
