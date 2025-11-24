// controllers/productController.js
import Product from "../models/Product.js";

// GET /api/products - public: list all products (for home page)
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/products/:id - public: get a single product
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json(product);
  } catch (error) {
    console.error("Error getting product:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// POST /api/products - protected: create product (admin or logged-in user)
export const addProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl, category, inStock } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      imageUrl,
      category,
      inStock,
      createdBy: req.user.userId, // from authMiddleware
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(400).json({ message: error.message });
  }
};

// PUT /api/products/:id - protected: update product
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.userId },
      req.body,
      { new: true }
    );

    if (!product)
      return res
        .status(404)
        .json({ message: "Product not found or not created by you" });

    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(400).json({ message: error.message });
  }
};

// DELETE /api/products/:id - protected: delete product
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.userId,
    });

    if (!deleted)
      return res
        .status(404)
        .json({ message: "Product not found or not created by you" });

    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Server error" });
  }
};
