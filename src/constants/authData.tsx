import { TArrayStrings } from "../types/popularFormats";

export const loginInputs: TArrayStrings = ["Email", "Password"];

export const registerInputs: TArrayStrings = ["Username", ...loginInputs, "Confirm Password"];
