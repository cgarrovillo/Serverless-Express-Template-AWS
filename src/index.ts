import serverless from 'serverless-http'
import express from 'express'

import router from './controllers/v1/routes'

const app = express()

app.use(router)

module.exports.handler = serverless(app)
