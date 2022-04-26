import express from "express";
import {verifyToken, verifyTokenAndAdmin,verifyTokenAndAuthorization} from "../verifyToken.js";
import {newOrder, updateOrder, cancelOrder, findOrder, allOrders, findOrderById, getIncome} from "../controllers/orderController.js";
const router = express.Router();


/** 
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *         - userId
 *         - products
 *         - totalPrice
 *         - status
 *         - address
 *       properties:
 *         userId:
 *           type: string
 *           description: id of the order.
 *         products:
 *           type: array
 *           description: product features
 *         totalPrice:
 *           type: number
 *           descripton: total price of the product.
 *         status:
 *           type: string
 *           descripton: status of a product.
 *         address:
 *           type: object
 *           descripton: address of a product.
 *       example:
 *         userId: id of user
 *         products: expects object array of products product id and quantity
 *         totalPrice: total price of order
 *         status: status of order 
 *         address: address of user (expects object) 
 *
 */
 
/** 
 * @swagger
 * components:
 *   schemas:
 *     UpdateOrder:
 *       type: object
 *       required:
 *       properties:
 *         userId:
 *           type: string
 *           description: id of the order.
 *         products:
 *           type: array
 *           description: product features
 *         totalPrice:
 *           type: number
 *           descripton: total price of the product.
 *         status:
 *           type: string
 *           descripton: status of a product.
 *         address:
 *           type: object
 *           descripton: address of a product.
 *       example:
 *           attribute:value
 *
 */

/** 
 * @swagger
 * components:
 *   schemas:
 *     Income:
 *       type: object
 *       required:
 *       properties:
 *         _id:
 *           type: string
 *           description: order month.
 *         total:
 *           type: number
 *           description: ortder number.
 *       example:
 *           attribute:value
 */


/**
 * @swagger
 *  tags:
 *    name: Orders
 *    description: Orders part
 */

/**
  * @swagger
  * /api/orders:
  *   post:
  *     summary: New Order
  *     tags: [Orders]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Order'
  *     responses:
  *       200:
  *         description: Order success !
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Order'
  *       500:
  *         description: Some server error
  * 
  */

router.post("/",verifyToken,newOrder);

/**
 * @swagger
 * /api/orders/{id}:
 *  put:
 *    summary: updates a order by id.
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The order id 
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/UpdateOrder"
 *    responses:
 *      200:   
 *        description: Sipariş başarıyla güncellendi !
 *      400:
 *        description: Sipariş bulunamadı !
 *      401:
 *        description: Giriş yapılmadı !
 *      403:
 *        description: Yönetici izni bulunamadı !
 * 
 */

router.put("/:id",verifyTokenAndAdmin, updateOrder);

/**
 * @swagger
 * /api/orders/{id}:
 *  delete:
 *    summary: Deletes a order by id.
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The order id 
 *    responses:
 *      200:   
 *        description: Order cancelled successfully !
 *      400:
 *        description: Order not found !
 * 
 */
router.delete("/:id",verifyTokenAndAdmin, cancelOrder);


/**
 * @swagger
 * /api/orders/find:
 *  get:
 *    summary: Gets a order by userid.
 *    tags: [Orders] 
 *    responses:
 *      200:   
 *        description: orders listed successfully !
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Order"
 *      400:
 *        description: Order not found !
 * 
 */
router.get("/find",verifyTokenAndAuthorization, findOrder);

/**
 * @swagger
 * /api/orders/find/{id}:
 *  get:
 *    summary: Gets a order by id.
 *    tags: [Orders]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The order id 
 *    responses:
 *      200:   
 *        description: Order found successfully !
 *      400:
 *        description: Order not found !
 * 
 */
router.get("/find/:id",verifyTokenAndAuthorization, findOrderById);

/**
 * @swagger
 * /api/orders:
 *  get:
 *    summary: Gets all orders.
 *    tags: [Orders] 
 *    responses:
 *      200:   
 *        description: All orders listed successfully !
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Order"
 *      400:
 *        description: Orders not found !
 * 
 */
router.get("/",verifyTokenAndAdmin, allOrders);

/**
 * @swagger
 * /api/orders/income:
 *  get:
 *    summary: Gets income.
 *    tags: [Orders] 
 *    responses:
 *      200:   
 *        description: All orders listed successfully !
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Income"
 *      400:
 *        description: Orders not found !
 * 
 */
router.get("/income",verifyTokenAndAdmin, getIncome);

export default router;