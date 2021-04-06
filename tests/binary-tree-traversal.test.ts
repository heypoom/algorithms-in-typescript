import {N, collect, bfs, dfss, dfs, Order, traverse, Algo} from '~/binary-tree'

//    A
//  B   C
// D E F G

const tree = N('A', N('B', N('D'), N('E')), N('C', N('F'), N('G')))

describe('Binary Tree Traversal', () => {
  it('should work', () => {
    collect(tree, bfs).join('') //?
    collect(tree, dfss).join('') //?

    collect(tree, dfs, Order.Pre).join('') //?
    collect(tree, dfs, Order.In).join('') //?
    collect(tree, dfs, Order.Post).join('') //?

    bfs(tree, (v) => console.log(v), Order.In)
    dfs(tree, (v) => console.log(v), Order.In)
    dfss(tree, (v) => console.log(v))
  })
})
