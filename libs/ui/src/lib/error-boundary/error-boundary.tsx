import { Component } from 'react'
import styles from './error-boundary.module.scss'

function logError(error: Error, info: React.ErrorInfo) {
  console.error(error, info)
}
type ErrorState = { hasError: boolean; error?: Error }

export class ErrorBoundary extends Component {
  state: ErrorState = { hasError: false }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    logError(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles['error-boundary']}>
          <img src="/assets/dino.png" alt="dino" />
          <p>
            Something's a bit off please <a href="/">try again</a>.
          </p>
          <p>
            If the issue persists please report it at{' '}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/radulle/t9/issues"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      )
    }

    return this.props.children
  }
}
