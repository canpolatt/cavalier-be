import express from "express";
import { updateUser } from "../controllers/userController.js";
import {
    verifyTokenAndAuthorization,
  } from "../verifyToken.js";

const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);

export default router;
