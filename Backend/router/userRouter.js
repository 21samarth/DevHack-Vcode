import express from 'express';
import * as userController from '../controller/userController.js'
const router = express.Router();
router.post("/save",userController.save)
router.get("/fetch",userController.fetch)
router.patch("/update",userController.update)
router.delete("/delete",userController.deleteuser)
router.post("/login",userController.login)

export default router