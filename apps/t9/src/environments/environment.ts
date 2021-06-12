// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.prod.ts`.

import { fetchCombinations } from '../app/getCombinations'

export const environment = {
  production: false,
  getCombinations: fetchCombinations,
  sw: false,
}
