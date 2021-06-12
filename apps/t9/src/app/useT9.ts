import { Combinations } from '@t9/api-interfaces'
import { getNumeric } from '@t9/convertor'
import { useEffect, useState } from 'react'
import { environment } from '../environments/environment'

export function useT9(utterance = new SpeechSynthesisUtterance()) {
  const [text, setText] = useState<string>('')
  const [numeric, setNumeric] = useState<string>('')
  const [combinations, setCombinations] = useState<Combinations>()

  useEffect(() => {
    environment.getCombinations(numeric, setCombinations)
  }, [numeric])

  const handleKey = (key: string) => {
    if (key === '0') {
      setText((prev) => prev.concat(numeric, ' '))
      setNumeric('')
      setCombinations(undefined)
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
      if (speechSynthesis.speaking) speechSynthesis.cancel()
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
      if (speechSynthesis.speaking) speechSynthesis.cancel()
      utterance.text = text + numeric
      speechSynthesis.speak(utterance)
    }
  }

  const selectCombination = (combination: string) => () => {
    setText((prev) => prev.concat(combination, ' '))
    setNumeric('')
    setCombinations(undefined)
  }

  return {
    combinations,
    text,
    numeric,
    handleKey,
    selectCombination,
  }
}
