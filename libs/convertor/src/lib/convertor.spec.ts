import { getNumeric, getRegExp } from './convertor'

describe('convertor', () => {
  it('getNumeric', () => {
    expect(getNumeric('a dad')).toEqual('20323')
  })
  it('getRegExp', () => {
    expect(getRegExp('20323').test('a dad')).toBe(true)
  })
})
