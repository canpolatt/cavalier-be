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

/** 
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - image
 *         - categories
 *         - price
 *         - stock
 *         - brand
 *       properties:
 *         _id:
 *           type: string
 *           description: id of the product.
 *         title:
 *           type: string
 *           description: Title of the product.
 *         description:
 *           type: string
 *           descripton: Description of the product.
 *         image:
 *           type: string
 *           descripton: Image a product.
 *         categories:
 *           type: array
 *           descripton: Categories of a product.
 *         size:
 *           type: array
 *           descripton: Size of a product.
 *         color:
 *           type: array
 *           descripton: Color of a product.
 *         price:
 *           type: integer
 *           descripton: Price of a product.
 *         stock:
 *           type: integer
 *           descripton: Stock of a product.
 *         inStock:
 *           type: boolean
 *           descripton: Stock check of a product.
 *         brand:
 *           type: string
 *           descripton: Brand of a product.
 *         createdAt:
 *           type: date
 *           descripton: Created date of a product.
 *         updatedAt:
 *           type: date
 *           descripton: Updated date of a product.
 *         __v:
 *           type: integer
 *           descripton: __v
 *       example:
 *         title: product title
 *         description: product description
 *         image: image link
 *         categories: [product categories must be array] 
 *         size: [product size must be array] 
 *         color: [product color must be array] 
 *         price: 2000
 *         stock: 10
 *         inStock: true / false must be boolean
 *         brand: brand value
 *
 */
 

 /**
  * @swagger
  * /api/products:
  *   post:
  *     summary: Add Product
  *     tags: [Products]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Product'
  *     responses:
  *       200:
  *         description: The Product was successfully added !
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Product'
  *       201:
  *         description: The Product was successfully added !
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Product'
  *       500:
  *         description: Some server error
  *     security: 
  * 
  */

router.post("/", verifyTokenAndAdmin, addProduct);

/**
 * @swagger
 *  tags:
 *    name: Products
 *    description: Products part
 */

/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Gets all products (enter true if you want to see newest on top) .
 *    tags: [Products]
 *    parameters:
 *      - in: query
 *        name: new
 *        schema:
 *          type: string
 *        required: false
 *        description: Enter "true" or leave empty
 *    responses:
 *      200:   
 *        description: Success
 * 
 */
router.get("/", getAllProducts);

/**
 * @swagger
 * /api/products/find/{id}:
 *  get:
 *    summary: Gets a product by id.
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product id 
 *    responses:
 *      200:   
 *        description: Product description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Product"
 *      400:
 *        description: Product not found !
 * 
 */
router.get("/find/:id",getProduct);

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    summary: Update a product by id.
 *    tags: [Products]
 *    consumes:
 *     - application/json
 *    produces:
 *     - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product id 
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/UpdateProduct"
 *    responses:
 *      200:   
 *        description: Product description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Product"
 *      400:
 *        description: Ürün bulunamadı !
 *      403:
 *        description: Yönetici izniniz yok !
 * 
 */
router.put("/:id", verifyTokenAndAdmin, updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *    summary: Deletes a product by id.
 *    tags: [Products]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The product id 
 *    responses:
 *      200:   
 *        description: Product deleted successfully !
 *      400:
 *        description: Product not found !
 * 
 */

router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

export default router;
