import { z } from "zod";

export const NewsletterSchema = z
  .object({
    email: z.string({ required_error: "Email is required" }).email(),
    username: z
      .string({ required_error: "Username is required" })
      .min(3, "Username must be at least 3 characters long"),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string({ required_error: "Confirm password is required" })
      .min(8, "Password must be at least 8 characters long")
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    params: {
      password: "password",
      confirmPassword: "confirmPassword"
    },
    path: ["confirmPassword"]
  });
