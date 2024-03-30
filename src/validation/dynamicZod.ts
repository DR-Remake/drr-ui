import { z } from "zod";
import { TValidationKey } from "../types/zodTypes";

export const dynamicZod = (keys: TValidationKey[], validatePass = false) =>
  z
    .object(
      keys.reduce(
        (acc, { name = "", min = 3, max = 32 }) => {
          acc[name] = z
            .string({
              required_error: `${name} is required.`
            })
            .min(min, `${name} must be at least ${min} characters`)
            .max(max, `${name} must be at most ${max} characters`);

          return acc;
        },
        {} as Record<string, z.ZodString>
      )
    )
    .refine((data) => validatePass && data.password === data.passwordConfirmation, {
      message: "Passwords do not match",
      path: ["passwordConfirmation"]
    });
