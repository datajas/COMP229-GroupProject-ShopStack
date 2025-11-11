import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Shopping Website API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));