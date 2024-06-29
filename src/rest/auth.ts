import { siteConfig } from "@/config/siteConfig";
import { User } from "../types/zustand";

export async function loginRequest({ username, password }: { username: string; password: string }) {
  const res = await fetch(`${siteConfig.env.BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });
  const {
    data: { user, token },
    error
  }: {
    data: { user: User; token: string };
    error: string;
  } = await res.json();
  if (!res.ok) {
    if (error) Promise.reject(new Error(error));
    Promise.reject(new Error("Login failed"));
  }

  return Promise.resolve({ user, token });
}

export async function logoutRequest({ token }: { token: string }) {
  const res = await fetch(`${siteConfig.env.BASE_API}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
  const { data, error } = await res.json();
  if (!res.ok) {
    if (!error) return Promise.reject(new Error("An error occurred"));
    return Promise.reject(new Error(error));
  }
  return Promise.resolve(data);
}

export async function registerRequest({
  username,
  email,
  password
}: {
  username: string;
  email: string;
  password: string;
}) {
  const res = await fetch(`${siteConfig.env.BASE_API}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password })
  });
  const {
    data: { user, token },
    error
  }: {
    data: { user: User; token: string };
    error: string;
  } = await res.json();
  if (!res.ok) {
    if (error) Promise.reject(new Error(error));
    Promise.reject(new Error("Registration failed"));
  }

  return Promise.resolve({ user, token });
}

export async function verifyEmailRequest({ email, code, token }: { email: string; code: string; token: string }) {
  const res = await fetch(`${siteConfig.env.BASE_API}/auth/verifyemail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ email, code })
  });
  const { data, error } = await res.json();
  if (!res.ok) {
    if (!error) return Promise.reject(new Error("An error occurred"));
    return Promise.reject(error);
  }
  return Promise.resolve(data);
}

export async function getNewVerificationCode({ email, token }: { email: string; token: string }) {
  const res = await fetch(`${siteConfig.env.BASE_API}/auth/getverificationcode`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ email })
  });
  const { data, error } = await res.json();
  if (!res.ok) {
    if (!error) return Promise.reject(new Error("An error occurred"));
    return Promise.reject(error);
  }
  return Promise.resolve(data);
}
