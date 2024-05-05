import { z } from "zod";

export const verifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, "Verification code must be at least 6 characters")
    .max(6, "Verification code must be at most 6 characters"),
  email: z.string().email()
});
