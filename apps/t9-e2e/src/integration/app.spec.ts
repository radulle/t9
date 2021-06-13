import {
  getDisplay,
  getKeyByAbc,
  getKeyByIdx,
  getNumeric,
  getSuggestionByIdx,
  getTitle,
} from '../support/app.po'

describe('t9', () => {
  beforeEach(() => cy.visit('/'))

  it('should display ui', () => {
    getTitle().contains('T9+')
  })

  it('should display typed numerics', () => {
    getKeyByAbc('def').click()
    getKeyByAbc('abc').click()
    getKeyByAbc('def').click()
    getNumeric().contains('323')
  })

  it('should display typed suggestions', () => {
    getKeyByAbc('def').click()
    getKeyByAbc('abc').click()
    getKeyByAbc('def').click()
    getDisplay().contains('dad')
  })

  it('should start a new word after space', () => {
    getKeyByAbc('def').click()
    getKeyByAbc('abc').click()
    getKeyByAbc('def').click()
    getDisplay().contains('dad')
    getKeyByAbc('space').click()
    getKeyByAbc('mno').click()
    getKeyByAbc('tuv').click()
    getKeyByAbc('mno').click()
    getDisplay().contains('mum')
  })

  it('should capitalize first character', () => {
    getKeyByAbc('def').click()
    getKeyByAbc('abc').click()
    getKeyByAbc('def').click()
    getKeyByAbc('space').click()
    getDisplay().contains('Dad')
  })

  it('should be able to type common punctuations', () => {
    getKeyByIdx(1).click()
    getSuggestionByIdx(3).click()
    getDisplay().contains('?')
  })

  it('should capitalize after period', () => {
    getKeyByAbc('def').click()
    getKeyByAbc('abc').click()
    getKeyByAbc('def').click()
    getDisplay().contains('dad')
    getKeyByIdx(1).click()
    getSuggestionByIdx(1).click()
    getKeyByAbc('mno').click()
    getKeyByAbc('tuv').click()
    getKeyByAbc('mno').click()
    getKeyByAbc('space').click()
    getDisplay().contains('Mum')
  })
})
