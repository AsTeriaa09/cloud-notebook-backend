const z = require("zod");

const RegValidation = z.object({
  username: z
    .string({ required_error: "Username cannot be empty" })
    .trim()
    .min(3, { message: "Username must be atleast 3 characters long!" })
    .max(25, { message: "Username cannot excede 25 characters" }),
  email: z
    .string({ required_error: "Email cannot be empty" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast 3 characters long!" })
    .max(125, { message: "Username cannot excede 125 characters" }),
  password: z
    .string({ required_error: "Password cannot be empty" })
    .trim()
    .min(6, { message: "Password must be atleast 6 characters long!" })
    .max(225, { message: "Password cannot excede 225 characters" }),
});

const LoginValidation = z.object({
  email: z
    .string({ required_error: "Email cannot be empty" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast 3 characters long!" })
    .max(125, { message: "Username cannot excede 125 characters" }),
  password: z
    .string({ required_error: "Password cannot be empty" })
    .trim()
    .min(6, { message: "Password must be atleast 6 characters long!" })
    .max(225, { message: "Password cannot excede 225 characters" }),
});

module.exports = { RegValidation, LoginValidation };
