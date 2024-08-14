const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();


 const JWT_KEY = process.env.JWT_SECRET_KEY;

const UserSchema = new mongoose.Schema({
  username: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// to hash the password
UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcryptjs.genSalt(10);
    const hash_pass = await bcryptjs.hash(user.password, saltRound);
    user.password = hash_pass;
    next();
  } catch (error) {
    next(error);
  }
});
// to compare pass
UserSchema.methods.comparePassword = async function (password) {
  try {
    return await bcryptjs.compare(password, this.password);
  } catch (error) {
    console.log(error);
  }
};

// to generate token using jwt
UserSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      JWT_KEY,
      {
        expiresIn: "60d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const User = new mongoose.model("user", UserSchema);
module.exports = User;
