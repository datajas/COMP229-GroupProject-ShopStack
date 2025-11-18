import express from "express";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
    logoutUser
} from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import { isAdmin, isCustomer } from "../middleware/authMiddleware.js";
const router = express.Router();

// Basic CRUD route setup
router.get("/", authMiddleware,isAdmin,getUsers);       // READ
router.post("/", authMiddleware,createUser);    // CREATE
router.put("/:id", authMiddleware,isCustomer,updateUser);  // UPDATE (placeholder)
router.delete("/:id", authMiddleware,isCustomer,deleteUser); // DELETE (placeholder)
router.post('/login', loginUser);
router.post('/logout', authMiddleware, logoutUser);

export default router;
