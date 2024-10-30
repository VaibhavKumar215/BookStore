import express from 'express'
import { signUp,Login } from '../Contoller/user_Controller.js'

const router = express.Router()

router.post("/signUp",signUp)
router.post("/Login",Login)

export default router