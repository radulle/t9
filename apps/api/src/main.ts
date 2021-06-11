import * as express from 'express'
import { addRootRoutes } from './app/root'
import { addT9Routes } from './app/t9'

const app = express()

addRootRoutes(app)
addT9Routes(app)

const port = process.env.port || 3333
export const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api')
})
server.on('error', console.error)
