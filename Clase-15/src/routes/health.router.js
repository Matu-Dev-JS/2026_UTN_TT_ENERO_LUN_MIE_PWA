import express from 'express'

import healthController from '../controllers/health.controller.js'

const healthRouter = express.Router()

healthRouter.get(
    '/',
    healthController.getApi
)

healthRouter.get(
    '/database',
    healthController.getDB
)

export default healthRouter
