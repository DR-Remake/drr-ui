import Profile from "@/views/Profile/Profile";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/profile")({
  component: Profile
});
