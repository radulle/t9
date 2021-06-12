import { Display, Frame, Keyboard, Suggestions } from '@t9/ui'
import { useHardwareKeyboard } from './useHardwareKeyboard'
import { useT9 } from './useT9'

export const App = () => {
  const { combinations, text, numeric, handleKey, selectCombination } = useT9()
  const active = useHardwareKeyboard(handleKey)
  return (
    <>
      <Frame>
        <Display>
          {text}
          <span>{numeric}</span>
          <Suggestions
            select={selectCombination}
            suggestions={combinations?.results || []}
          />
        </Display>
      </Frame>
      <Keyboard active={active} handleKey={handleKey} />
    </>
  )
}
