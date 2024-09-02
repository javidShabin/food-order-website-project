const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/token");

// User registration..
const registerUser = async (req, res) => {
  try {
    // Get userdata from request body
    const { email, ...rest } = req.body;
    // check if required fields are present
    if (!email || Object.keys(rest).length === 0) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    // check if any user already exists
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(409).json({ message: "User already exists" });
    }
    // user password hashing
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(rest.password, saltRounds);
    // Create new user and save in database
    const newUser = new User({ email, ...rest, password: hashedPassword });
    await newUser.save();

    const token = generateToken({ _id: newUser.id, email: newUser.email }); // generate token
    // pass token as cooki the token will expire in one hour
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.ENVIRONMENT === "development" ? false : true,
      maxAge: 1 * 60 * 60 * 1000,
    });
    res.json({
      success: true,
      message: "Create new user",
      newUser,
    });
  } catch (error) {
    console.log(404).json({ error });
  }
};
// User login
const loginUser = async (req, res) => {
  try {
    // destructuring fields
    const { email, password } = req.body;
    // check if required fields are present
    if ((!email, !password)) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // check the user signed or not
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
      return res.status(401).json({
        success: false,
        message: "User does not exist",
      });
    }
    // compare password for login
    const passwordMatch = bcrypt.compareSync(password, isUserExist.password);
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Unatherised access",
      });
    }
    // generate token
    const token = generateToken(isUserExist._id); // generate token
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.ENVIRONMENT === "development" ? false : true,
        maxAge: 1 * 60 * 60 * 1000,
      }); // pass the token as cookie
    res.json({
      success: true,
      message: "User logged in",
    });
  } catch (error) {
    res.status(404).json({ message: "faild to user login" });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
