import express from "express";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/userController.js";

const router = express.Router();

// Basic CRUD route setup
router.get("/", getUsers);       // READ
router.post("/", createUser);    // CREATE
router.put("/:id", updateUser);  // UPDATE (placeholder)
router.delete("/:id", deleteUser); // DELETE (placeholder)

export default router;
