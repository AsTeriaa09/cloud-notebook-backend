const express = require("express");
const Authrouter = express.Router();
const AuthControllers = require("../Controllers/AuthController");
const UserAuthMiddleware = require("../middlewares/userAuthMiddleware");
const validate = require("../middlewares/validationMiddleware");
const {
  RegValidation,
  LoginValidation,
} = require("../Validation/AuthValidation");

Authrouter.route("/").get(AuthControllers.home);
Authrouter.route("/register").post(
  validate(RegValidation),
  AuthControllers.Register
);
Authrouter.route("/login").post(
  validate(LoginValidation),
  AuthControllers.login
);
Authrouter.route("/user").get(UserAuthMiddleware, AuthControllers.GetUser);

module.exports = Authrouter;
