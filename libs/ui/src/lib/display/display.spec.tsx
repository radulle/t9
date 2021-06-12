import { render } from '@testing-library/react'
import { Display } from './display'

describe('Display', () => {
  it('should render successfully', () => {
    const { container } = render(<Display />)
    expect(container.innerHTML).toBeTruthy()
  })
})
