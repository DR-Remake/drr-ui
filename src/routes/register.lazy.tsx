import { zodResolver } from "@hookform/resolvers/zod";
import { createLazyFileRoute } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import borderImage from "../assets/border.svg";
import { Input } from "../components/Input";
import { RegisterSchema } from "../types/register";

export const Route = createLazyFileRoute("/register")({
  component: Register
});

function Register() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema)
  });

  const submitHandler = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormProvider {...form}>
      <div
        className="mx-auto flex w-2/4 flex-col items-start gap-4 rounded-md border-4 bg-primary p-8"
        style={{
          border: "20px solid",
          borderImage: `url(${borderImage}) 20`,
          borderImageSlice: "30"
        }}
      >
        <div className="mx-auto text-2xl font-bold uppercase">Create New Account</div>
        <form onSubmit={submitHandler} className="w-full space-y-4">
          <Input label="Username" name="username" />
          <Input label="Email" name="email" />
          <Input label="Password" name="password" />
          <Input label="Confirm Password" name="passwordConfirmation" />
          <button className="rounded-md border border-gray-50 px-4 py-2" type="submit">
            Register
          </button>
        </form>
      </div>
    </FormProvider>
  );
}
