const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
require("dotenv").config();

const JWT_KEY = process.env.JWT_SECRET_KEY;

const UserAuthMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ msg: " Unauthorized http , token not provided!" });
  }
  const jwtToken = token.replace("Bearer ", "").trim();
  //console.log(jwtToken)
  try {
    const isVerfied = jwt.verify(jwtToken, JWT_KEY);
    const UserInfo = await User.findOne({ email: isVerfied.email }).select({
      password: 0,
    });
    req.user = UserInfo;
    req.token = token;
    req.userId = UserInfo._id;
    //console.log(req.userId);
    next();
  } catch (error) {
    return res.status(401).json({ msg: "invalid token" });
  }
};

module.exports = UserAuthMiddleware;
