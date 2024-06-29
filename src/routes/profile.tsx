import Profile from "@/views/Profile/Profile";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: Profile,
  beforeLoad: async ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: "/login"
      });
    }
  }
});
