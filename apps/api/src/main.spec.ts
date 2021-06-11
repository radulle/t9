import * as request from 'supertest'
import { server } from './main'

describe('Api', () => {
  afterAll((done) => {
    server.close()
    done()
  })

  describe('/api', () => {
    it('should respond to the GET method', async () => {
      const response = await request(server).get('/api')
      expect(response.statusCode).toBe(200)
      expect(JSON.parse(response.text).message).toBeTruthy()
    })

    it('should throw 404 on non GET methods', async () => {
      const r = request(server)
      const requests = [r.post, r.put, r.patch, r.delete]
      const responses = await Promise.all(requests.map((e) => e('/api')))
      expect(
        responses.every((response) => response.statusCode === 404)
      ).toBeTruthy()
    })

    describe('/api/t9', () => {
      it('should respond to the GET method for /api/t9', async () => {
        const response = await request(server).get('/api/t9')
        expect(response.statusCode).toBe(200)
        expect(JSON.parse(response.text).count).toBe(0)
      })

      it('should respond to the GET method for /api/t9/', async () => {
        const response = await request(server).get('/api/t9/')
        expect(response.statusCode).toBe(200)
        expect(JSON.parse(response.text).count).toBe(0)
      })

      it('should respond to the GET method for /api/t9/323', async () => {
        const response = await request(server).get('/api/t9/323')
        expect(response.statusCode).toBe(200)
        expect(JSON.parse(response.text).results).toContain('dad')
      })

      it('should throw 404 on non GET methods', async () => {
        const r = request(server)
        const requests = [r.post, r.put, r.patch, r.delete]
        const responses = await Promise.all(
          requests.map((e) => e('/api/t9/323'))
        )
        expect(
          responses.every((response) => response.statusCode === 404)
        ).toBeTruthy()
      })
    })
  })
})
