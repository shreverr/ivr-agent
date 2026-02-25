import { Hono } from 'hono'
import { env } from './config/env'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/health', (c) => {
  return c.text(`IVR Agent service running on port: ${env.PORT}`)
})

export default {
  fetch: app.fetch,
  port: env.PORT,
}
