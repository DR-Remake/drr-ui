import { z } from "zod";

export const NewsletterSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email()
});
