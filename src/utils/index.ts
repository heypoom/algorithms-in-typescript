export const dedupe = <K>(list: K[]) => Array.from(new Set(list))
export const sum = (list: number[]) => list.reduce((a, b) => a + b)
export const zip = <T>(A: T[], B: T[]) => A.map((item, i) => [item, B[i]])

export const trims = (s: string[]) =>
  s?.map((line) => line?.trim())?.filter((line) => line) ?? []

export const triml = (s: string) => trims(s.split('\n')).join('\n')

export function collect<K>(process: (visit: (value: K) => void) => void): K[] {
  const values: K[] = []
  process((value) => values.push(value))

  return values
}

export const parseTaggedTemplate = <T>(
  strings: TemplateStringsArray,
  args?: T[]
) =>
  zip(strings.concat(), args?.map(String) ?? [])
    .map((strs) => trims(strs).join(''))
    .join('')
    .trim()

export const trimmed = (strings: TemplateStringsArray, args?: string[]) =>
  triml(parseTaggedTemplate(strings, args))
