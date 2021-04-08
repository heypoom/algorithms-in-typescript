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
    const g = dot`A -> B -> C -> D`

    expect(g.edgeOf('A')).toStrictEqual(['B'])
    expect(g.edgeOf('B')).toStrictEqual(['C'])
    expect(g.edgeOf('C')).toStrictEqual(['D'])
    expect(g.edgeOf('D')).toStrictEqual([])
  })

  it('can create diamond graph', () => {
    // A -> B | A -> C | B -> D | C -> D
    const g = dot`A -> B, C -> D`

    expect(g.edgeOf('A')).toStrictEqual(['B', 'C'])
    expect(g.edgeOf('B')).toStrictEqual(['D'])
    expect(g.edgeOf('C')).toStrictEqual(['D'])
    expect(g.edgeOf('D')).toStrictEqual([])
  })

  it('can create cyclic graph', () => {
    const g = dot`A -> B, C -> A`

    expect(g.edgeOf('A')).toStrictEqual(['B', 'C'])
    expect(g.edgeOf('B')).toStrictEqual(['A'])
    expect(g.edgeOf('C')).toStrictEqual(['A'])
  })
})
