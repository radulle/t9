import { Combinations } from '@t9/api-interfaces'
import { getRegExp } from '@t9/convertor'
import { dictionary } from '@t9/dictionary'
export { getPhrases, getWords }

const memoMap = new Map<string, Combinations>()

function getPhrases(numeric: string, dict = dictionary, memo = memoMap) {
  numeric = prune(numeric)
  if (memo.has(numeric)) return memo.get(numeric) as Combinations
  const results = combinations(
    numeric.split('0').map((n) => getWords(n, dict, memo).results)
  )
  memo.set(numeric, { count: results.length, results })
  return memo.get(numeric) as Combinations
}

function getWords(numeric: string, dict = dictionary, memo = memoMap) {
  if (memo.has(numeric)) return memo.get(numeric) as Combinations
  const regexp = getRegExp(numeric)
  const results = dict.filter((word) => word.match(regexp))
  memo.set(numeric, { count: results.length, results })
  return memo.get(numeric) as Combinations
}

function combinations(words: string[][]) {
  if (words.length === 0) return []
  for (let i = words.length - 2; i >= 0; i--) {
    const combos: string[] = []
    const tail = words.pop() as string[]
    const curr = words[i]
    curr.forEach((e1) => tail.forEach((e2) => combos.push(e1 + ' ' + e2)))
    words[i] = combos
  }
  return words.pop() as string[]
}

function prune(numeric: string): string {
  return numeric.replace(/[1#*]/g, '').replace(/(0{1,})/g, '0')
}
