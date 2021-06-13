import { cleanup, getByText, render, waitFor } from '@testing-library/react'
import { App } from './app'

const fetch = (global.fetch = jest.fn())
window.SpeechSynthesisUtterance = jest.fn()
const fetchMock = (obj: unknown) =>
  fetch.mockResolvedValue({
    json: () => obj,
  })

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
  })

  it('should render successfully', async () => {
    fetchMock({
      count: 0,
      results: [],
    })
    const { container } = render(<App />)
    await waitFor(() => getByText(container, /T9\+/))
  })
})
