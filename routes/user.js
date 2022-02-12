import express from "express";
//import {register_user} from "../controllers/userController";
import { registerUser, loginUser } from "../controllers/userController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login",loginUser);

export default router;