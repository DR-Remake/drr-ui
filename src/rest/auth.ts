import { User } from "../types/zustand";

export async function loginRequest({ username, password }: { username: string; password: string }) {
  const res = await fetch("http://localhost:3000/api/auth/login", {
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

export async function registerRequest({
  username,
  email,
  password
}: {
  username: string;
  email: string;
  password: string;
}) {
  const res = await fetch("http://localhost:3000/api/auth/register", {
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

export async function verifyEmailRequest({ email, code }: { email: string; code: string }) {
  const res = await fetch("http://localhost:3000/api/auth/verifyemail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
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
