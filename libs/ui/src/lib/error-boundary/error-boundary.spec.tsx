import { render } from '@testing-library/react'
import { ErrorBoundary } from './error-boundary'

describe('ErrorBoundary', () => {
  it('should render children when no error thrown', () => {
    const { baseElement } = render(<ErrorBoundary>42</ErrorBoundary>)
    expect(baseElement.textContent).toContain('42')
  })
  it('should render a message when error thrown', () => {
    const Error = () => {
      throw Error
    }
    const { baseElement } = render(
      <ErrorBoundary>
        <Error />
      </ErrorBoundary>
    )
    expect(baseElement.innerHTML).toContain(
      `Something's a bit off please try again.`
    )
  })
})
