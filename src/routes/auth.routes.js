// Endpoints de Login y Register
import { Router } from "express"
import * as authCtrl from '../controllers/auth.controller.js'
import { checkDuplicateUserNameOrEmail, checkRolesExisted } from '../middlewares/verifySignup.js'
const router = Router()

router.post('/signup', [checkDuplicateUserNameOrEmail, checkRolesExisted], authCtrl.signUp) // Ruta para registrarse
router.post('/signin', authCtrl.signIn) // Ruta para ingresar a la aplicación

export default router