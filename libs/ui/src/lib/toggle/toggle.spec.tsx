import { render } from '@testing-library/react'
import Toggle from './toggle'

describe('Toggle', () => {
  const fn = jest.fn()
  it('should render successfully', () => {
    const { baseElement } = render(<Toggle on={true} toggle={fn} text="42" />)
    expect(baseElement.textContent).toContain('42')
  })
})
