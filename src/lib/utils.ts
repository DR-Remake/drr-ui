import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function validateUserSession({ session }: { session: string }) {
  const res = await fetch("http://localhost:3000/api/auth/validatesession", {
    headers: {
      Method: "GET",
      Authorization: `Bearer ${session}`
    }
  });
  const { data, error } = await res.json();
  console.log(data, error);
  if (!res.ok) {
    if (!error) return Promise.reject(new Error("An error occurred"));
    return Promise.reject(error);
  }
  return Promise.resolve(data);
}
