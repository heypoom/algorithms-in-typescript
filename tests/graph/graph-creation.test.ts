import {dot} from '~/graph'

describe('Graph Creation', () => {
  it('can link to itself', () => {
    const g = dot`A -> A`

    expect(g.edgeOf('A')).toStrictEqual(['A'])
  })

  it('can link to itself multiple times without duplicate vertices.', () => {
    const g = dot`A -> A, A, A, A, A, A`

    expect(g.edgeOf('A')).toStrictEqual(['A'])
  })
})
