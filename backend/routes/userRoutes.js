// routes/userRoutes.js
import express from "express";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getMyProfile,
} from "../controllers/userController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();


router.get("/me", auth, getMyProfile);
router.get("/", auth, getUsers);
router.post("/", createUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);

export default router;




