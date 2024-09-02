const jwt = require("jsonwebtoken");

const generateToken = ({ _id, email }) => {
  try {
    const token = jwt.sign(
      {
        id: _id,
        email: email,
      },
      process.env.JWT_SECRET_KEY
    );
    console.log(token);
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { generateToken };
