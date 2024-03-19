import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index
});

function Index() {
  return (
    <>
      <div className="text-xl font-bold">Welcome to the Remake of Dungeon Rampage</div>
    </>
  );
}
