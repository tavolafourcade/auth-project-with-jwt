import { Router } from "express"
import * as productsCtrl from "../controllers/products.controller.js"
import { verifyToken, isModerator, isAdmin } from '../middlewares/auth.jwt.js'

const router = Router()

router.post("/", [verifyToken, isModerator], productsCtrl.createProduct)
router.get("/", productsCtrl.getProducts)
router.get("/:id", productsCtrl.getProductById)
router.put("/:id", [verifyToken, isAdmin], productsCtrl.updateProductById)
router.delete("/:id", [verifyToken, isAdmin], productsCtrl.deleteProductById)


export default router