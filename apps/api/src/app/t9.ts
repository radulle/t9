import { getCombinations } from '@t9/combinations'
import { Express } from 'express'

export function addT9Routes(app: Express) {
  app.get('/api/t9/?', (req, resp) => {
    resp.send(getCombinations(''))
  })
  app.get('/api/t9/:numeric', (req, resp) => {
    resp.send(getCombinations(req.params.numeric))
  })
}
