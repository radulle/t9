import { Message } from '@t9/api-interfaces'
import { Express } from 'express'

export function addRootRoutes(app: Express) {
  const greeting: Message = { message: 'Welcome to T9 api...' }
  app.get('/api/?', (req, res) => {
    res.send(greeting)
  })
}
