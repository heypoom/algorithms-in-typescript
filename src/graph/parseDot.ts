import {Graph} from './graph'

const trims = (s: string[]) =>
  s.map((line) => line.trim()).filter((line) => line)

export function parseDot<V = unknown, K extends string = string>(
  markup: string,
  graph: Graph<V, K>
): Graph<V, K> {
  const statements = trims(markup.split('\n'))

  for (let statement of statements) {
    const [source, targetText] = trims(statement.split('->')) //?
    const targets = trims(targetText.split(',')) //?

    graph.link(source as K, targets as K[])
  }

  return graph
}
