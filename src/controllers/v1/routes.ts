import express from 'express'

import helloWorld from '../v1/helloWorld'

const router = express.Router()

router.get('/', helloWorld)

export default router
