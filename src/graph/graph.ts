import {bfs} from './bfs'

import {collect} from '~/utils'

export class Graph<V = unknown, K extends string = string> {
  nodes: Map<K, V> = new Map()
  edges: Map<K, K[]> = new Map()

  constructor(values?: Record<K, V>) {
    if (values) this.setValues(values)
  }

  /** Add a node to the graph. */
  add(key: K, value: V) {
    this.nodes.set(key, value)

    if (!this.edges.has(key)) this.edges.set(key, [])
  }

  /** Set the values for multiple nodes. */
  setValues(nodes: Record<K, V>) {
    Object.entries(nodes).forEach(([key, value]) => {
      this.add(key as K, value as V)
    })
  }

  /** Link one or more edges to a source node. */
  link(source: K, target: K | K[]) {
    if (Array.isArray(target)) return this.links(source, target)

    this.edgeOf(source).push(target)
  }

  /** Link multiple edges to one source node. */
  links(source: K, target: K[]) {
    target.forEach((edge) => this.link(source, edge))
  }

  /** Chain-link the nodes together, like A -> B -> C -> D */
  chain(...edges: K[]) {
    edges.reduce((source, target) => {
      this.link(source, target)

      return target
    })
  }

  valueOf(key: K): V | null {
    return this.nodes.get(key) ?? null
  }

  edgeOf(key: K): K[] {
    return this.edges.get(key) ?? []
  }

  bfs(source: K, onVisit: (edge: K) => void) {
    bfs(source, this, onVisit)
  }

  values(keys: K[]): (V | null)[] {
    return keys.map((k) => this.valueOf(k ?? null))
  }

  log(edges: K[]): string {
    return edges.map((edge) => `${edge} (${this.valueOf(edge)})`).join(' -> ')
  }

  collect(
    source: K,
    onProcess: (source: K, onVisit: (edge: K) => void) => void
  ): K[] {
    const process = onProcess.bind(this)

    return collect((onVisit) => process(source, onVisit))
  }
}

export const createGraph = <V = unknown, K extends string = string>(
  nodes: Record<K, V>
) => new Graph<V, K>(nodes)
