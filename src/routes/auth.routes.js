// Endpoints de Login y Register
import { Router } from "express"

const router = Router()

router.post('/signup') // Ruta para registrarse
router.post('/signin') // Ruta para ingresar a la aplicación

export default router