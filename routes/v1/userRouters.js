const express = require("express");
const { registerUser } = require("../../controllers/userController");
const router = express.Router();

// Register a new user
router.post('/register', registerUser);
// Login user and get token
router.post('/login', );
// logout user and clear the token
router.post('/logout', );
// get all useres list
router.post('/list', );
// Get user profile
router.post('/profile/:id', );
// Update user profile
router.post('/profile/:id', );

module.exports = { userRouter: router };