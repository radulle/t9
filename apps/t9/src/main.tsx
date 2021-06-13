import { ErrorBoundary } from '@t9/ui'
import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app/app'
import { environment } from './environments/environment'

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root')
)

if (environment.sw && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
  })
}
