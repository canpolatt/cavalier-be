import express from "express";
import { updateUser } from "../controllers/userController.js";
import {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);

export default router;
