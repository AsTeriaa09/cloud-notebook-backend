const z = require("zod");

const NotesValidation = z.object({
  title: z
    .string({ required_error: "Title cannot be empty" })
    .trim()
    .min(3, { message: "Title must be atleast 3 characters long!" })
    .max(80, { message: "Title cannot excede 80 characters" }),
  description: z
    .string({ required_error: "Description cannot be empty" })
    .trim()
    .min(9, { message: "Description must be atleast 9 characters long!" })
    .max(255, { message: "Description cannot excede 255 characters" }),
  tags: z
    .string({ required_error: "Tags cannot be empty" })
    .trim()
    .min(3, { message: "Tags must be atleast 3 characters long!" })
    .max(125, { message: "Tags cannot excede 125 characters" }),
});

module.exports = NotesValidation;
