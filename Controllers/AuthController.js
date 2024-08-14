const User = require("../models/UserModel");

const home = async (req, res) => {
  try {
    res.status(200).send("hello!");
  } catch (error) {
    res.status(400).send("access failed");
  }
};

// to register user
const Register = async (req, res) => {
  try {
    const { username, email, password, date } = req.body;

    const UserExists = await User.findOne({ email });
    if (UserExists) {
      return res.status(400).json({ msg: "email already exists" });
    }
    //const createUser = await User.create({ username, email, password, date });
    const createUser = await User.create(req.body);
    const token = await createUser.generateToken();
    return res.status(200).json({
      msg: "user created succesfully",
      token,
      userId: createUser._id.toString(),
    });
  } catch (error) {
    //res.status(500).json({msg:"login failed!"});
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const UserExists = await User.findOne({ email });
    if (!UserExists) {
      return res.status(400).json({ msg: "invalid credentials" });
    }

    const isPassValid = await UserExists.comparePassword(password);
    const token = await UserExists.generateToken();
    if (isPassValid) {
      return res.status(200).json({
        msg: "user logged succesfully",
        token,
        userId: UserExists._id.toString(),
      });
    } else {
      return res.status(401).json({ msg: "invalid infomation" });
    }
  } catch (error) {
    //res.status(500).json("login failed!");
    next(error);
  }
};

// logic to get all user info's
const GetUser = async (req, res) => {
  try {
    const UserInfo = req.user; 
    return res.status(200).json(UserInfo)
  } catch (error) {
    res.status(400).json({msg:"Error getting user"})
  }
};

module.exports = { home, Register, login, GetUser };
