import { createEvent, fireEvent, render } from '@testing-library/react'
import { Suggestions } from './suggestions'

describe('Suggestions', () => {
  const fn = jest.fn()
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should render null with required props without suggestions', () => {
    const { container } = render(<Suggestions suggestions={[]} select={fn} />)
    console.info(container.innerHTML)
    expect(container.innerHTML).toBeFalsy()
  })
  it('should render suggestions', () => {
    const { getByText } = render(
      <Suggestions suggestions={['aardvark']} select={fn} />
    )
    expect(getByText('aardvark')).toBeTruthy()
  })
  it('should invoke select on click', () => {
    const { getByText } = render(
      <Suggestions suggestions={['aardvark']} select={fn} />
    )
    expect(fn).not.toBeCalled()
    const node = getByText('aardvark')
    fireEvent(node, createEvent.click(node))
    expect(fn).toBeCalled()
  })
})
