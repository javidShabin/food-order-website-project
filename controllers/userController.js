const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");

// user registration..
const registerUser = async (req, res) => {
  try {
    // Get userdata from request body
  const { email, ...rest } = req.body;
  // check if required fields are present
  if (!email || Object.keys(rest).length === 0) {
    return res.status(400).json({ 
        message: "All fields are required" 
    });
  }
  // check if any user already exists
  const isUserExist = await User.findOne({email})
  if (isUserExist) {
    return res.status(409).json({ message: "User already exists" });
  }
  
  // Create new user and save in database
  const newUser = new User({email, ...rest})
  await newUser.save()
  res.json(newUser)
  } catch (error) {
    
  }
};

module.exports = {
  registerUser,
};
