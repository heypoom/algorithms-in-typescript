import {createGraph} from '~/graph'

describe('Graph Chain Linking', () => {
  it('can create linear graph by chaining', () => {
    const g = createGraph({A: 1, B: 2, C: 3, D: 4})

    // A -> B, B -> C, C -> D
    g.chain('A', 'B', 'C', 'D')

    expect(g.edgeOf('A')).toStrictEqual(['B'])
    expect(g.edgeOf('B')).toStrictEqual(['C'])
    expect(g.edgeOf('C')).toStrictEqual(['D'])
    expect(g.edgeOf('D')).toStrictEqual([])
  })

  it('can create cyclic graph by chaining', () => {
    const g = createGraph({A: 1, B: 2, C: 3, D: 4})

    // A -> B, B -> A, A -> C, C -> D, D -> A
    g.chain('A', 'B', 'A', 'C', 'D', 'A')

    expect(g.edgeOf('A')).toStrictEqual(['B', 'C'])
    expect(g.edgeOf('B')).toStrictEqual(['A'])
    expect(g.edgeOf('C')).toStrictEqual(['D'])
    expect(g.edgeOf('D')).toStrictEqual(['A'])
  })
})
