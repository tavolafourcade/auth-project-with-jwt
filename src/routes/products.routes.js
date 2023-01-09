import { Router } from "express"
import * as productsCtrl from "../controllers/products.controller.js"
import { verifyToken } from '../middlewares/auth.jwt.js'

const router = Router()

router.post("/", verifyToken, productsCtrl.createProduct)
router.get("/", productsCtrl.getProducts)
router.get("/:id", productsCtrl.getProductById)
router.put("/:id", verifyToken, productsCtrl.updateProductById)
router.delete("/:id", verifyToken, productsCtrl.deleteProductById)


export default router