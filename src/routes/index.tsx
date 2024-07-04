import borderImage from "@/assets/border.svg";
import { validateUserSession } from "@/lib/utils";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  beforeLoad: async ({ context }) => {
    if (context.isAuthenticated) {
      return;
    }
    const session = localStorage.getItem("session") ?? "";
    if (!session) {
      console.log("chata");
      return;
    }
    const { isAuthenticated, user } = await validateUserSession({ session });
    context.login({ isAuthenticated, user, token: session });
    if (!isAuthenticated) {
      localStorage.removeItem("session");
      throw redirect({ to: "/profile" });
    }
  }
});

function Index() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div
        className="h-[500px] w-5/6 rounded-md bg-primary bg-cover bg-center bg-no-repeat"
        style={{
          border: "20px solid",
          borderImage: `url(${borderImage}) 30`,
          borderImageSlice: "30"
        }}
      />
      <div>Announcements</div>
    </div>
  );
}
