
// controllers/userController.js
import User from "../models/user.js";
import generateToken from "../utils/jwt.js";


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


/*/ Login user
export const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body; // descructuring from body
        const user = await User.findOne({email})

        if (!user){
            return res.status(404).json({ message: 'User not found' }); // 404 HTTP status code for not found
        }

        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid){
            return res.status(401).json({ message: 'Invalid password' }); // 401 HTTP status code for unauthorized
        }

        const token = generateToken(user)

        return res.status(200).json({ message: 'Login successful', user, token });
    } catch (error) {
        res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
    }
}*/

// Login user
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; // destructuring from body
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' }); // 404 HTTP status code for not found
    }

    // Here you should add password verification logic
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' }); // 401 HTTP status code for unauthorized
    }

    const token = generateToken(user);

    return res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(500).json({ message: error.message }); // 500 HTTP status code for server error
  }
}

//logout
export const logoutUser = (req, res) => { 
  try {
    // Invalidate the token on client side by removing it
    //res.clearCookie('token');     
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

