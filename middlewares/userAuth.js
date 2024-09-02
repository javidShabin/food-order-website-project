const jwt = require("jsonwebtoken");
const userAuthentication = (req, res, next) => {
  try {
    // get token form req.cookies
    const { token } = req.cookies;
    // check have any token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "user not autherized",
      });
    }
    // verify the token
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verifyToken) {
      return res.status(401).json({
        success: false,
        message: "user not autherized",
      });
    }
    // if have token send the token as object
    req.user = verifyToken;
    next()
  } catch (error) {
    res.status(400).json({
        success: false,
        message: "faild",
      });
  }
};
module.exports = { userAuthentication };