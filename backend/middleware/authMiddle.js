const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const authMiddle = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ "msg": "Token is not valid" });
  }
  const jwtToken = token.replace("Bearer ", "").trim();
  console.log('The token from controllerjs is', token);
  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);
    console.log(isVerified);
    const userData = await User.findOne({ email: isVerified.email }).select({
        password: 0
      });
      console.log(userData)
      req.user= userData
      req.token=token
      req.userID= userData._id
    next();

  } catch (error) {
    console.error(`The Error from jwtToken is ${error.message}`);
    return res.status(401).json({ "msg": "Token is not valid" });
  }
};
module.exports = authMiddle;
