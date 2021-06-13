export const getTitle = () => cy.get(`div.title`)
export const getKeyByAbc = (abc: string) => cy.get(`button.${abc}`)
export const getKeyByIdx = (idx: number) =>
  cy.get(`#root div:nth-child(2) button:nth-child(${idx})`)
  export const getSuggestionByIdx = (idx: number) =>
  cy.get(`#root div:nth-child(1) div:nth-child(2) div div:nth-child(${idx})`)
export const getToggleAutoSelect = () => cy.get(`div.title > button`)
export const getDisplay = () =>
  cy.get(`#root div:nth-child(1) div:nth-child(2)`)
export const getNumeric = () =>
  cy.get(`#root div:nth-child(1) div:nth-child(2) > span`)
