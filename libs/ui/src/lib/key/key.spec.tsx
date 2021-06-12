import { render } from '@testing-library/react'
import { Key } from './key'

describe('Key', () => {
  it('should render successfully with required props', () => {
    const { container } = render(<Key num="2" abc="abc" />)
    expect(container.innerHTML).toBeTruthy()
  })
})
