import { Combinations } from '@t9/api-interfaces'

let getWords: (numeric: string) => Combinations

export async function computeCombinations(
  numeric: string,
  cb: (val: Combinations) => void
) {
  if (!getWords) {
    const lib = await import('@t9/combinator')
    getWords = lib.getWords
  }
  cb(getWords(numeric))
}

export async function fetchCombinations(
  numeric: string,
  cb: (val: Combinations) => void
) {
  await fetch('/api/t9/' + numeric)
    .then((r) => r.json())
    .then(cb)
    .catch(console.error)
}
