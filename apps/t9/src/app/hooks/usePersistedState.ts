import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export function usePersistedState<T>(
  key: string,
  defaultValue?: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const item = localStorage.getItem(key)
    if (item) return JSON.parse(item)
    return defaultValue
  })
  useEffect(() => {
    state === null || state === undefined
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(state))
  })
  return [state, setState]
}
