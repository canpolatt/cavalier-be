import express from "express";
import {verifyToken, verifyTokenAndAdmin,verifyTokenAndAuthorization} from "../verifyToken.js";
import {newCategory, updateCategory, deleteCategory,allCategories} from "../controllers/categoryController.js";
const router = express.Router();


/** 
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *         - image
 *       properties:
 *         name:
 *           type: string
 *           description: category name
 *         image:
 *           type: string
 *           descripton: category image
 *       example:
 *         name: expects string
 *         image: expects string URL
 *
 */
 
/** 
 * @swagger
 * components:
 *   schemas:
 *     UpdateCategory:
 *       type: object
 *       required:
 *       properties:
 *         name:
 *           type: string
 *           description: name of the category.
 *         image:
 *           type: string
 *           description: image of the category
 *       example:
 *           attribute:value
 *
 */


/**
 * @swagger
 *  tags:
 *    name: Categories
 *    description: Categories part
 */

/**
  * @swagger
  * /api/categories:
  *   post:
  *     summary: New Category
  *     tags: [Categories]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Category'
  *     responses:
  *       200:
  *         description: Category added !
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Category'
  *       500:
  *         description: Some server error
  * 
  */

router.post("/",verifyTokenAndAdmin,newCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *  put:
 *    summary: updates a category by id.
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The category id 
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/UpdateCategory"
 *    responses:
 *      200:   
 *        description: Kategori başarıyla güncellendi !
 *      400:
 *        description: Kategori bulunamadı !
 *      401:
 *        description: Giriş yapılmadı !
 *      403:
 *        description: Yönetici izni bulunamadı !
 * 
 */

router.put("/:id",verifyTokenAndAdmin, updateCategory);

/**
 * @swagger
 * /api/categories/{id}:
 *  delete:
 *    summary: Deletes a category by id.
 *    tags: [Categories]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The category id 
 *    responses:
 *      200:   
 *        description: Category deleted successfully !
 *      400:
 *        description: Category not found !
 * 
 */
router.delete("/:id",verifyTokenAndAdmin, deleteCategory);

/**
 * @swagger
 * /api/categories:
 *  get:
 *    summary: Gets all categories.
 *    tags: [Categories] 
 *    responses:
 *      200:   
 *        description: All categories listed successfully !
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Category"
 *      400:
 *        description: Categories not found !
 * 
 */
router.get("/", allCategories);

export default router;