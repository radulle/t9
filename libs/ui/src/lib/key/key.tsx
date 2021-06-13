import classNames from 'classnames'
import styles from './key.module.scss'

export interface KeyProps {
  num?: string
  abc: string
  onClick?: () => void
  active?: boolean
  color?: string
}

const map = (kbd: string) => {
  switch (kbd) {
    case 'Enter':
      return '🕪'
    case 'ArrowLeft':
      return '←'
    case 'ArrowRight':
      return '→'
    case 'ArrowUp':
      return '↑'
    case 'ArrowDown':
      return '↓'
    case 'Backspace':
      return '⌫'
    case 'Delete':
      return '⌦'
    case 'Space':
      return '___________'
    default:
      return kbd
  }
}

export function Key({ num, abc, active, color, onClick }: KeyProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.key, color, abc.toLowerCase(), { active })}
    >
      <div className="btn">
        {num && <div className="num">{num}</div>}
        <div className="abc">{map(abc)}</div>
      </div>
    </button>
  )
}
