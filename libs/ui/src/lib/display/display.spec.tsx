import { render } from '@testing-library/react'

import Display from './display'

describe('Display', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Display />)
    expect(baseElement).toBeTruthy()
  })
})
