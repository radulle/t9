import { Display, Frame, Keyboard, Suggestions } from '@t9/ui'
import { useHardwareKeyboard } from './hooks/useHardwareKeyboard'
import { useT9 } from './hooks/useT9'

export const App = () => {
  const {
    combinations,
    text,
    numeric,
    handleKey,
    pushWord,
    autoSelect: on,
    toggleAutoSelect: toggle,
  } = useT9()
  const active = useHardwareKeyboard(handleKey)
  return (
    <>
      <Frame toggles={[{ text: 'auto', on, toggle }]}>
        <Display>
          {text.trimLeft()}
          <span className="numeric">{numeric}</span>
          <Suggestions
            select={pushWord}
            suggestions={combinations?.results || []}
          />
        </Display>
      </Frame>
      <Keyboard active={active} handleKey={handleKey} />
    </>
  )
}
