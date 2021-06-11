import { render } from '@testing-library/react'

import Key from './key'

describe('Key', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Key />)
    expect(baseElement).toBeTruthy()
  })
})
