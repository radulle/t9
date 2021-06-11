import { render } from '@testing-library/react'

import Keyboard from './keyboard'

describe('Keyboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Keyboard />)
    expect(baseElement).toBeTruthy()
  })
})
