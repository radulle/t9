import styles from './display.module.scss'

export function Display({ text }: { text: string[] }) {
  return (
    <div className={styles.display}>
      {text.map((word) => (
        <span>{word}</span>
      ))}
    </div>
  )
}
