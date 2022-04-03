import express from "express";
import { newMessage, getAllMessages} from "../controllers/messageBoxController.js";
import {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} from "../verifyToken.js";
const router = express.Router();

/** 
 * @swagger
 * components:
 *   schemas:
 *     MessageBox:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *         - phoneNumber
 *         - email
 *         - message
 *       properties:
 *         name:
 *           type: string
 *           description: name of the customer.
 *         surname:
 *           type: string
 *           description: surname of the customer.
 *         phoneNumber:
 *           type: string
 *           descripton: phone number of the customer.
 *         email:
 *           type: string
 *           descripton: email of the customer.
 *         message:
 *           type: string
 *           descripton: message of the customer.
 *       example:
 *         name: customer name
 *         surname: customer surname
 *         phoneNumber: customer phone number
 *         email: customer email
 *         message: customer message
 *
 */

/**
 * @swagger
 *  tags:
 *    name: MessageBox
 *    description: Message box part
 */

/**
  * @swagger
  * /api/messagebox:
  *   post:
  *     summary: New Message
  *     tags: [MessageBox]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/MessageBox'
  *     responses:
  *       200:
  *         description: Message sent !
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/MessageBox'
  *       500:
  *         description: Some server error
  * 
  */
router.post("/",newMessage);

/**
  * @swagger
  * /api/messagebox:
  *   get:
  *     summary: Get Messages
  *     tags: [MessageBox]
  *     responses:
  *       200:
  *         description: Messages loaded !
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/MessageBox'
  *       500:
  *         description: Some server error
  * 
  */
router.get("/",verifyTokenAndAdmin,getAllMessages);

export default router;