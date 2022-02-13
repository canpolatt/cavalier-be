import express from "express";
import { addProduct, getAllProducts , updateProduct } from "../controllers/productController.js";
import {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyTokenAndAdmin, addProduct);
router.get("/", getAllProducts);
router.put("/:id", verifyTokenAndAdmin, updateProduct);

export default router;