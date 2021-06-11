import { Key } from '../key/key'
import styles from './keyboard.module.scss'

export interface KeyboardProps {
  active?: string
}

const keys = [
  { key: '1', num: '1', abc: '' },
  { key: '2', num: '2', abc: 'abc' },
  { key: '3', num: '3', abc: 'def' },
  { key: 'Backspace', num: '', abc: 'Backspace', color: 'red' },
  { key: '4', num: '4', abc: 'ghi' },
  { key: '5', num: '5', abc: 'jkl' },
  { key: '6', num: '6', abc: 'mno' },
  { key: 'Enter', num: '', abc: 'Enter', color: 'green' },
  { key: '7', num: '7', abc: 'pqrs' },
  { key: '8', num: '8', abc: 'tuv' },
  { key: '9', num: '9', abc: 'wxyz' },
  { key: '0', num: '0', abc: 'Space' },
]

export function Keyboard({ active }: KeyboardProps) {
  return (
    <div className={styles.keyboard}>
      {keys.map(({ key, ...rest }) => (
        <Key key={key} color="navy" {...rest} active={active === key} />
      ))}
    </div>
  )
}
