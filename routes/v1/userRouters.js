const express = require("express");
const { registerUser, loginUser, logoutUser, getUseresList, getUserProfile, updateUserProfile } = require("../../controllers/userController");
const { userAuthentication } = require("../../middlewares/userAuth");

const router = express.Router();

// Register a new user
router.post('/register', registerUser);
// Login user and get token
router.post('/login', loginUser);
// logout user and clear the token
router.post('/logout', logoutUser);
// get all useres list
router.get('/list', getUseresList);
// Get user profile
router.get('/profile/:id', userAuthentication, getUserProfile);
// Update user profile
router.put('/profile/:id', userAuthentication, updateUserProfile);

module.exports = { userRouter: router };