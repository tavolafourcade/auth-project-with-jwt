import { Router } from "express"
import * as userCtrl from '../controllers/user.controller.js'
import { verifyToken, isModerator, isAdmin } from '../middlewares/auth.jwt.js'
import { checkRolesExisted } from '../middlewares/verifySignup.js'
const router = Router()

router.post('/', [ verifyToken, isAdmin, checkRolesExisted ],userCtrl.createUser) // Solo el Admin podría crear nuevos usuarios
export default router