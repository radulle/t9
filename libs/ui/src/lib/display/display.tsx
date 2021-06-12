import styles from './display.module.scss'

export const Display: React.FC = ({ children }) => (
  <div className={styles.display}>{children}</div>
)
