import borderImage from "@/assets/border.svg";
import { validateUserSession } from "@/lib/utils";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  errorComponent: ({ error }) => (
    <div>
      <h1>Error</h1>
      <p>{error.stack}</p>
    </div>
  ),
  beforeLoad: async ({ context }) => {
    try {
      if (context.isAuthenticated) return;

      const session = localStorage.getItem("session") ?? null;
      if (!session) return;

      const { isAuthenticated, user, error } = await validateUserSession({ session });
      console.log(error);

      context.login({ isAuthenticated, user, token: session });
      if (!isAuthenticated) {
        console.log("Session expired");
        localStorage.removeItem("session");
        throw redirect({ to: "/login" });
      }
    } catch (error) {
      console.error(error);
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
