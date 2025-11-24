// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // or app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);     // SignUp / SignIn
app.use("/api/users", userRoutes);    // User CRUD + /me
app.use("/api/products", productRoutes); // Product CRUD

// Health check
app.get("/", (req, res) => {
  res.send("Shopping Website API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
