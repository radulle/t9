import { getPhrases } from './combinator'

describe('combinations', () => {
  it('should not fail on empty input', () => {
    expect(getPhrases('')).toStrictEqual({
      count: 0,
      results: [],
    })
  })
  it('should prune all non valid characters (1#*)', () => {
    expect(getPhrases('1#2**#12', ['aa'])).toStrictEqual({
      count: 1,
      results: ['aa'],
    })
  })
  it('should reduce multiple to single zeros', () => {
    expect(getPhrases('20002', ['a'])).toStrictEqual({
      count: 1,
      results: ['a a'],
    })
  })
  it('should handle single words', () => {
    const dict = 'ad, ae, af, bd, be, bf, cd, ce, cf'.split(', ')
    expect(getPhrases('23', [...dict, 'on', 'no'])).toStrictEqual({
      count: dict.length,
      results: dict,
    })
  })
  it('should handle multiple words', () => {
    const dict = 'ad, ae, af, bd, be, bf, cd, ce, cf'.split(', ')
    expect(getPhrases('23023', [...dict, 'on', 'no']).count).toEqual(9 ** 2)
  })
  it('should handle very long sentence', () => {
    expect(
      getPhrases('5825047069064335306263064630968069034778062630470223').results
    ).toContain(
      'Luck is my middle name. Mind you, my first name is Bad.'
        .replace(/[.,]/g, '')
        .toLowerCase()
    )
  })
})
