import { Combinations } from '@t9/api-interfaces'
import { getNumeric } from '@t9/convertor'
import { useEffect, useState } from 'react'
import { environment } from '../../environments/environment'
import { usePersistedState } from './usePersistedState'

const punctuations = ['.', ',', '?', `'`]

export function useT9(utterance = new SpeechSynthesisUtterance()) {
  const [autoSuggest, setAutoSuggest] = usePersistedState<boolean>('auto', true)
  const [text, setText] = useState<string>('')
  const [numeric, setNumeric] = useState<string>('')
  const [combinations, setCombinations] = useState<Combinations>()

  useEffect(() => {
    environment.getCombinations(numeric, setCombinations)
  }, [numeric])

  const pushWord = (word: string) => {
    if (!word) return
    setText((prev) => {
      const capitalize =
        !prev ||
        prev.trim() === '' ||
        punctuations.includes(prev.trim().slice(-1))
      return prev
        .trim()
        .concat(
          !punctuations.includes(word) ? ' ' : '',
          capitalize ? word[0].toUpperCase() + word.slice(1) : word,
          ' '
        )
    })
    setNumeric('')
    setCombinations(undefined)
  }

  const topSuggestion = () =>
    autoSuggest && combinations?.count ? combinations.results[0] : numeric

  const mum = () => {
    if (speechSynthesis.speaking) speechSynthesis.cancel()
  }

  const utter = () => {
    mum()
    utterance.text =
      text +
      (autoSuggest && combinations?.count ? combinations.results[0] : numeric)
    speechSynthesis.speak(utterance)
  }

  const handleKey = (key: string) => {
    if (key === '0') {
      pushWord(topSuggestion())
      return
    }
    if (!numeric.length && key === '1') {
      setCombinations({ count: 4, results: punctuations })
      return
    }
    if (/\d/.test(key)) {
      setNumeric((prev) => prev + key)
      setCombinations(undefined)
      return
    }
    if (key === 'Delete') {
      setText('')
      setNumeric('')
      setCombinations(undefined)
      return
    }
    if (key === 'Backspace') {
      mum()
      if (numeric.length) {
        setNumeric((prev) => prev.slice(0, -1))
        setCombinations(undefined)
        return
      }
      if (text.length) {
        const split = text.trim().split(' ')
        setNumeric(getNumeric(split.pop() ?? ''))
        setText(split.join(' ').concat(' '))
        setCombinations(undefined)
        return
      }
    }
    if (key === 'Enter') {
      pushWord(topSuggestion())
      utter()
    }
  }

  return {
    combinations,
    text,
    numeric,
    handleKey,
    pushWord,
    autoSuggest,
    toggleAutoSuggest: () => setAutoSuggest((prev) => !prev),
  }
}
