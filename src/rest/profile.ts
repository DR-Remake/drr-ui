import { siteConfig } from "@/config/siteConfig";

export const updateAvatarRequest = async ({
  avatar,
  token,
  userEmail
}: {
  avatar: string;
  token: string;
  userEmail: string;
}) => {
  const res = await fetch(`${siteConfig.env.BASE_API}/users/changeavatar`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ avatar, userEmail })
  });
  const { data, error, message } = await res.json();
  if (!res.ok) {
    if (error) Promise.reject(new Error(error));
    Promise.reject(new Error("Failed to update avatar"));
  }
  return Promise.resolve({ data, message });
};
