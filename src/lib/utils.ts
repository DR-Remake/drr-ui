import { siteConfig } from "@/config/siteConfig";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function validateUserSession({ session }: { session: string }) {
  const res = await fetch(`${siteConfig.env.BASE_API}/auth/validatesession`, {
    headers: {
      Method: "GET",
      Authorization: `Bearer ${session}`
    }
  });
  const { data, error } = await res.json();
  if (!res.ok) {
    if (!error) return Promise.reject(new Error("An error occurred"));
    return Promise.reject(error);
  }
  return Promise.resolve(data);
}
