import express from 'express'
import { postContactForm } from '../controllers/contactController.js'

const router = express.Router()

router.post('/',postContactForm)

export default router;