import borderImage from "@/assets/border.svg";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index
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
