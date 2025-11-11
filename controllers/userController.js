
// controllers/userController.js
import User from "../models/User.js";

// Get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new user
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Update user 
export const updateUser = (req, res) => {
  res.json({ message: "Update user - To be completed in CRUD phase" });
};

// Delete user 
export const deleteUser = (req, res) => {
  res.json({ message: "Delete user - To be completed in CRUD phase" });
};
