import { getWords } from '@t9/combinator'
import { Express } from 'express'

export function addT9Routes(app: Express) {
  app.get('/api/t9/?', (req, resp) => {
    resp.send(getWords(''))
  })
  app.get('/api/t9/:numeric', (req, resp) => {
    resp.send(getWords(req.params.numeric))
  })
}
