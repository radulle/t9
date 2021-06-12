import { render } from '@testing-library/react'
import { Keyboard } from './keyboard'

describe('Keyboard', () => {
  it('should render successfully with required props', () => {
    const { container } = render(<Keyboard handleKey={jest.fn()} />)
    expect(container.innerHTML).toBeTruthy()
  })
})
