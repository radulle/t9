const num2char = [
  ' ',
  '',
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz',
]

const char2num = num2char.reduce((acc, cur, i) => {
  for (const c of cur) {
    acc[c] = i.toString()
  }
  return acc
}, {} as { [key: string]: string })

export function getNumeric(word: string) {
  return word
    .toLowerCase()
    .split('')
    .map((c) => char2num[c] ?? c)
    .join('')
}

export function getRegExp(numeric: string) {
  return new RegExp(
    `^${numeric
      .split('')
      .map((char) => `[${num2char[+char]}]`)
      .join('')}$`,
    'gi'
  )
}
