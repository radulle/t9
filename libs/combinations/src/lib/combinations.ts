import { Combinations } from '@t9/api-interfaces'
import * as wordlist from 'wordlist-english'
export const getCombinations = getPhrases

const keys = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
const dictionary: string[] = [
  ...wordlist['english/10'],
  ...wordlist['english/20'],
  ...wordlist['english/35'],
]
const memoMap = new Map<string, Combinations>()

function getPhrases(
  numeric: string,
  dict = dictionary,
  memo = memoMap
): Combinations {
  numeric = prune(numeric)
  if (memo.has(numeric)) return memo.get(numeric)
  const results = combinations(
    numeric.split('0').map((n) => getWords(n, dict, memo).results)
  )
  memo.set(numeric, { count: results.length, results })
  return memo.get(numeric)
}

function getWords(numeric: string, dict = dictionary, memo = memoMap) {
  if (memo.has(numeric)) return memo.get(numeric)
  const regexp = new RegExp(
    `^${numeric
      .split('')
      .map((char) => `[${keys[char]}]`)
      .join('')}$`,
    'g'
  )
  const results = dict.filter((word) => word.match(regexp))
  memo.set(numeric, { count: results.length, results })
  return memo.get(numeric)
}

function combinations(words: string[][]) {
  if (words.length === 0) return []
  for (let i = words.length - 2; i >= 0; i--) {
    const combos = []
    const tail = words.pop()
    const curr = words[i]
    curr.forEach((e1) => tail.forEach((e2) => combos.push(e1 + ' ' + e2)))
    words[i] = combos
  }
  return words.pop()
}

function prune(numeric: string) {
  return numeric.replace(/[1#*]/g, '').replace(/(0{1,})/g, '0')
}
