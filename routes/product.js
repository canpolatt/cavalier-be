import express from "express";
import {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProduct
} from "../controllers/productController.js";
import {
  verifyTokenAndAdmin
} from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyTokenAndAdmin, addProduct);
router.get("/", getAllProducts);
router.get("/find/:id",getProduct);
router.put("/:id", verifyTokenAndAdmin, updateProduct);
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

export default router;
