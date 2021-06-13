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
      return (
        <svg viewBox="0 0 1000 1000">
          <g>
            <path d="M713,297.9c-3.7-9.9-11.2-17.9-20.7-22.3c-7.8-4.4-17-6.3-26.5-4.8c-22.5,3.5-37.9,24.9-34.3,47.6c2,12.9,9.7,23.5,20.1,29.6c39.8,42.5,64.2,99.5,64.2,162.4c0,68.8-29.3,130.6-76,174c-8.6,7.5-14.1,18.5-14.1,30.8c0,22.5,18.2,40.7,40.7,40.7c11.5,0,21.9-4.8,29.3-12.5c7.9-4.6,14.1-11.8,17.3-20.5c51-56.3,82.3-130.6,82.3-212.5C795.3,428.6,763.9,354.3,713,297.9L713,297.9z M855.3,149.6c-6.8-13.8-20.9-23.3-37.3-23.3c-22.9,0-41.5,18.6-41.5,41.5c0,15.1,8,28.2,20,35.5c70.4,73.7,113.9,173.3,113.9,283.2c0,123.1-54.5,233.3-140.3,308.4l0.2,0.2c-13.5,6.7-22.7,20.6-22.7,36.6c0,22.6,18.3,40.9,40.9,40.9c13.4,0,25.3-6.5,32.8-16.4c0.4-0.4,0.7-0.9,1.1-1.3l0.1,0.1C924.8,765.3,990,633.7,990,486.6C990,356,938.6,237.4,855.3,149.6L855.3,149.6z M418.2,79L214,288H89.5C36.2,288,10,316.7,10,367.5v264.8c0,50,27,79.5,79.5,79.5H214l204.3,209c58.7,55.1,148,30.8,148-60.7V139.7C566.2,47.2,475.8,25,418.2,79L418.2,79z M486.8,819.3c0,60.2-26.7,26.4-54-0.6C385,771.7,313,695.6,253.7,632.3H142.4c-40.3,0-53-13.5-53-53V420.4c0-38.6,13.5-53,53-53H255c58.9-63.7,130.3-139.6,178-186.3c27.1-26.5,53.8-61,53.8,1.7C486.8,312.3,486.8,692.5,486.8,819.3L486.8,819.3z" />
          </g>
        </svg>
      )
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
      return 'cls'
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
