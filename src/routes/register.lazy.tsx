import { zodResolver } from "@hookform/resolvers/zod";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import borderImage from "../assets/border.svg";
import { RegisterSchema } from "../types/register";

export const Route = createLazyFileRoute("/register")({
  component: Register
});

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema)
  });

  const submitHandler = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto flex w-2/4 flex-col items-start gap-4 rounded-md border-4 bg-primary p-8"
      style={{
        border: "20px solid",
        borderImage: `url(${borderImage}) 20`,
        borderImageSlice: "30"
      }}
    >
      <div className="text-xl font-bold">Register</div>
      <input
        {...register("username")}
        placeholder="Username"
        type="text"
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-black focus:outline-none"
      />
      <span>{errors.username?.message}</span>
      <input
        {...register("email")}
        placeholder="Email"
        type="email"
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-black focus:outline-none"
      />
      <span>{errors.email?.message}</span>
      <input
        {...register("password")}
        placeholder="Password"
        type="password"
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-black focus:outline-none"
      />
      <span>{errors.password?.message}</span>
      <input
        {...register("passwordConfirmation")}
        placeholder="Confirm Password"
        type="password"
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-black focus:outline-none"
      />
      <span>{errors.passwordConfirmation?.message}</span>
      <button className="rounded-md border border-gray-50 px-4 py-2" type="submit">
        Register
      </button>
    </form>
  );
}
