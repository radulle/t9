import classNames from 'classnames'
import style from './toggle.module.scss'

/* eslint-disable-next-line */
export interface ToggleProps {
  on: boolean
  text: string
  toggle: () => void
}

export function Toggle({ text, on, toggle }: ToggleProps) {
  return (
    <button onClick={toggle} className={classNames(style.toggle, { on })}>
      {text}
      <div>
        <div></div>
      </div>
    </button>
  )
}

export default Toggle
