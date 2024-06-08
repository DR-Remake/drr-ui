import { z } from "zod";

export const verifyEmailSchema = z.object({
  code: z
    .string()
    .min(6, "Verification code must be at least 6 characters")
    .max(8, "Verification code must be at most 8 characters"),
  email: z.string().email()
});
