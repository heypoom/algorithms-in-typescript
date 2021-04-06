export const dedupe = <K extends string>(list: K[]) => Array.from(new Set(list))
export const sum = (list: number[]) => list.reduce((a, b) => a + b)

export function collect<K>(process: (visit: (value: K) => void) => void): K[] {
  const values: K[] = []
  process((value) => values.push(value))

  return values
}
