import { render } from '@testing-library/react'
import { Frame } from './frame'

describe('Frame', () => {
  it('should render successfully', () => {
    const { container } = render(<Frame />)
    expect(container.innerHTML).toBeTruthy()
  })
})
