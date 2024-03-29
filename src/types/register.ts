import { z } from "zod";

export const RegisterSchema = z
  .object({
    username: z
      .string({ required_error: "Username is required" })
      .min(3, "Username must be at least 3 characters")
      .max(32, "Username must be at most 32 characters"),
    email: z.string({ required_error: "Email is required" }).email(),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must be at most 32 characters"),
    passwordConfirmation: z
      .string({ required_error: "Please confirm your password" })
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must be at most 32 characters")
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"]
  });
