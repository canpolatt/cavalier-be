import express from "express";
import { updateUser, deleteUser, getAllUsers, getUser } from "../controllers/userController.js";
import {
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin
 } from "../verifyToken.js";

const router = express.Router();

/** 
 * @swagger
 * components:
 *   schemas:
 *     UpdateUser:
 *       type: object
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
 *         password: new password
 */

/**
 * @swagger
 *  tags:
 *    name: Users
 *    description: Users part
 */

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: Update a user by id.
 *    tags: [Users]
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
 *        description: The user id 
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/UpdateUser"
 *    responses:
 *      200:   
 *        description: User description by id
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/UpdateUser"
 *      400:
 *        description: Kullanıcı bulunamadı !
 *      403:
 *        description: Giriş yapılmadı !
 * 
 */

// UPDATE USER
router.put("/:id", verifyTokenAndAuthorization, updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    summary: Deletes a user by id.
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id 
 *    responses:
 *      200:   
 *        description: Kullanıcı başarıyla silindi !
 *      400:
 *        description: Kullanıcı bulunamadı !
 *      401:
 *        description: Giriş yapılmadı !
 *      403:
 *        description: Yönetici izni bulunamadı !
 * 
 */

// DELETE USER
router.delete("/:id", verifyTokenAndAdmin, deleteUser);


/**
 * @swagger
 * /api/users/:
 *  get:
 *    summary: get all user (enter true if you want to see newest on top) .
 *    tags: [Users]
 *    parameters:
 *      - in: query
 *        name: new
 *        schema:
 *          type: string
 *        required: false
 *        description: Enter "true" or leave empty
 *    responses:
 *      200:   
 *        description: Kullanıcılar başarıyla gösterildi !
 *      400:
 *        description: Bir şey ters gitti !
 *      401:
 *        description: Giriş yapılmadı !
 *      403:
 *        description: Yönetici izni bulunamadı !
 * 
 */

// GET ALL USERS
router.get("/",verifyTokenAndAdmin,getAllUsers);



/**
 * @swagger
 * /api/users/find/{id}:
 *  get:
 *    summary: Get a user by id.
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id 
 *    responses:
 *      200:   
 *        description: Kullanıcı bulundu !
 *      400:
 *        description: Kullanıcı bulunamadı !
 *      401:
 *        description: Giriş yapılmadı !
 *      403:
 *        description: Yönetici izni bulunamadı !
 * 
 */
// GET A USER
router.get("/find/:id",verifyTokenAndAdmin,getUser);

export default router;
