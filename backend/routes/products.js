// routes/productRoutes.js
import express from "express";
import {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();

// public
router.get("/", getProducts);
router.get("/:id", getProductById);

// protected
router.post("/", auth, addProduct);
router.put("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

export default router;
