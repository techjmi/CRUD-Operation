const { z } = require("zod");

const signUpSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(50, { message: "Username can't be more than 50 characters long" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters long" })
    .max(50, { message: "Email can't be more than 50 characters long" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least 10 characters long" })
    .max(15, { message: "Phone can't be more than 15 characters long" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password must be at least 6 characters long" })
    .max(50, { message: "Password can't be more than 50 characters long" }),
    confirmPassword: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(3, { message: "Password must be at least 6 characters long" })
    .max(50, { message: "Password can't be more than 50 characters long" }),
});

module.exports = signUpSchema;
