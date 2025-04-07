import { Hono } from 'hono'

 import citizens from './exterior/adapters/taxes/index.js'

const app = new Hono()

app.route('/planet/:id/taxes', citizens)

export default app
