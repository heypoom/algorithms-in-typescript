import {bfs} from './search/bfs'

import {collect, dedupe, parseTaggedTemplate, zip} from '~/utils'
import {parseDot} from './dot/parseDot'

export class Graph<V = unknown, K extends string = string> {
  nodes: Map<K, V> = new Map()
  edges: Map<K, K[]> = new Map()

  constructor(values?: Record<K, V>) {
    if (values) this.setValues(values)
  }

  /** Set the node's value. */
  set(key: K, value: V) {
    // Set the node's value.
    this.nodes.set(key, value)

    // Setup edges for the source node if still unset.
    this.initEdges(key)
  }

  initEdges(key: K) {
    if (!this.edges.has(key)) this.edges.set(key, [])
  }

  /** Set the values for multiple nodes. */
  setValues(nodes: Partial<Record<K, V>>) {
    Object.entries(nodes).forEach(([key, value]) => {
      this.set(key as K, value as V)
    })
  }

  /** Link one or more edges to a source node. */
  link(source: K | K[], target: K | K[]) {
    // If there is multiple sources, link them one-by-one.
    if (Array.isArray(source)) return this.linkSources(source, target)

    // If there is multiple target, link them one-by-one.
    if (Array.isArray(target)) return this.links(source, target)

    // Setup edges for the source node if needed.
    this.initEdges(source)

    // Ignore if the target is already linked with the source.
    const edges = this.edgeOf(source)
    if (edges.includes(target)) return

    // Link the target node with the source's.
    edges.push(target)
  }

  /** Link multiple edges to one source node. */
  links(source: K, edges: K[]) {
    edges.forEach((edge) => this.link(source, edge))
  }

  /** Link multiple edges to one source node. */
  linkSources(sources: K[], target: K | K[]) {
    sources.forEach((source) => this.link(source, target))
  }

  /** Chain-link the nodes together, like A -> B -> C -> D */
  chain(...edges: (K | K[])[]) {
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

  parse(markup: string): Graph<V, K> {
    return parseDot(markup, this)
  }

  dot(strings: TemplateStringsArray, ...args: K[]) {
    const markup = parseTaggedTemplate(strings, args)

    return this.parse(markup)
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
    const edges = collect<K>((onVisit) => process(source, onVisit))

    return dedupe<K>(edges)
  }
}

export const createGraph = <V = unknown, K extends string = string>(
  nodes: Record<K, V>
) => new Graph<V, K>(nodes)
