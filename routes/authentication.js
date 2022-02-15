import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
const router = express.Router();

/** 
 * @swagger
 * components:
 *   schemas:
 *     RegisterUser:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: Name of the user.
 *         surname:
 *           type: string
 *           description: Surname of the user.
 *         email:
 *           type: string
 *           descripton: Email of a user.
 *         password:
 *           type: string
 *           descripton: Password of a user.
 *       example:
 *         name: user
 *         surname: user
 *         email: user@user.com
 *         password: user
 *
 */

/** 
 * @swagger
 * components:
 *   schemas:
 *     LoginUser:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           descripton: Email of a user.
 *         password:
 *           type: string
 *           descripton: Password of a user.
 *       example:
 *         email: user@user.com
 *         password: user
 */

/**
 * @swagger
 *  tags:
 *    name: Users
 *    description: User authentication part
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterUser'
 *       201:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/RegisterUser'
 *       500:
 *         description: Some server error
 *     security: 
 * 
 */
router.post("/register", registerUser);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginUser'
 *     responses:
 *       200:
 *         description: The user was successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginUser'
 *       201:
 *         description: The user was successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginUser'
 *       500:
 *         description: Some server error
 *     security: 
 * 
 */
router.post("/login", loginUser);

export default router;
