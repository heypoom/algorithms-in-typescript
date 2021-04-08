import {createGraph} from '~/graph'

describe('Graph Values', () => {
  it('should return the correct value of the graph', () => {
    const g = createGraph({A: 10, B: 20, C: 30, D: 40})

    expect(g.valueOf('A')).toBe(10)
    expect(g.valueOf('B')).toBe(20)
    expect(g.valueOf('C')).toBe(30)
    expect(g.valueOf('D')).toBe(40)
  })

  it('can update graph values using set and setValues', () => {
    const g = createGraph({A: 0, B: 0, C: 0, D: 0})

    // Set one value at a time.
    g.set('A', 1)
    g.set('B', 2)

    // Set multiple values at a time.
    g.setValues({C: 3, D: 4})

    expect(g.valueOf('A')).toBe(1)
    expect(g.valueOf('B')).toBe(2)
    expect(g.valueOf('C')).toBe(3)
    expect(g.valueOf('D')).toBe(4)
  })
})
