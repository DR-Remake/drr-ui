import { zodResolver } from "@hookform/resolvers/zod";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const Route = createLazyFileRoute("/register")({
  component: Register
});

const schema = z
  .object({
    username: z.string().min(3).max(32),
    email: z.string().email(),
    password: z.string().min(8).max(32),
    passwordConfirmation: z.string().min(8).max(32)
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"]
  });

function Register() {
  const form = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <>
      <form className="mx-auto flex w-2/4 flex-col items-start gap-4 rounded-md border-4 border-border bg-primary bg-cover bg-center bg-no-repeat p-8">
        <div className="text-xl font-bold">Register</div>
        <input
          {...form.register("username")}
          placeholder="Username"
          type="text"
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-black focus:outline-none"
        />
        <input
          {...form.register("email")}
          placeholder="Email"
          type="email"
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-black focus:outline-none"
        />
        <input
          {...form.register("password")}
          placeholder="Password"
          type="password"
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-black focus:outline-none"
        />
        <input
          {...form.register("passwordConfirmation")}
          placeholder="Confirm Password"
          type="password"
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-black focus:outline-none"
        />
        <button className="rounded-md border border-gray-50 px-4 py-2" type="button">
          Register
        </button>
      </form>
    </>
  );
}
