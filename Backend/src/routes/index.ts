import { Router } from 'express'
const router = Router()
import BaseController from '../controller/base.controller'

const base = new BaseController
router.get('/healthcheck', base.healthcheck)

export default router