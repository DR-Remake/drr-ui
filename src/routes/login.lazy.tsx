import { zodResolver } from "@hookform/resolvers/zod";
import { createLazyFileRoute } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import borderImage from "../assets/border.svg";
import useGenerateInputs from "../hooks/useGenerateInputs";
import { loginSchema } from "../types/login";

export const Route = createLazyFileRoute("/login")({
  component: Login
});

function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema)
  });

  const inputs = useGenerateInputs({ array: ["Email", "Password"] });

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
        <div className="mx-auto text-2xl font-bold uppercase">Login</div>
        <form onSubmit={submitHandler} className="w-full space-y-4">
          {inputs}
          <button className="rounded-md border border-gray-50 px-4 py-2 text-sm font-semibold uppercase" type="submit">
            Create
          </button>
        </form>
      </div>
    </FormProvider>
  );
}
