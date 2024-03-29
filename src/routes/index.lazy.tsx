import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index
});

function Index() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="h-[500px] w-5/6 rounded-md border-4 border-border bg-primary bg-cover bg-center bg-no-repeat" />
      <div>Announcements</div>
    </div>
  );
}
