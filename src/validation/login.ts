import { dynamicZod } from "./dynamicZod";

export const loginSchema = dynamicZod([
  {
    name: "email"
  },
  {
    name: "password",
    min: 8
  }
]);
