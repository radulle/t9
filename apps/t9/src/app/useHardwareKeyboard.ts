import { useEffect, useState } from 'react'

/** Handles physical keyboard */
export function useHardwareKeyboard(
  handleKey: (key: string) => void,
  validKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'Enter',
    ' ',
    'Backspace',
    'Delete',
  ]
) {
  const [key, setKey] = useState<string | undefined>(undefined)

  const handleKeyDown = (ev: KeyboardEvent) => {
    ev.preventDefault()
    if (ev.key === ' ') return setKey('0')
    if (validKeys.includes(ev.key)) setKey(ev.key)
  }

  const handleKeyUp = (ev: KeyboardEvent) => {
    ev.preventDefault()
    if (key !== undefined) handleKey(key)
    setKey(undefined)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  })

  return key
}
