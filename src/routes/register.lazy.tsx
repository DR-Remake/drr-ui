import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/register")({
  component: Register
});

function Register() {
  return (
    <>
      <div className="text-xl font-bold">Register</div>
    </>
  );
}
