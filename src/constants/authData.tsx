import { arrayStrings } from "../types/popularFormats";

export const loginInputs: arrayStrings = ["Email", "Password"];

export const registerInputs: arrayStrings = ["Username", ...loginInputs, "Confirm Password"];
