import { zodResolver } from "@hookform/resolvers/zod";
import { createLazyFileRoute } from "@tanstack/react-router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import borderImage from "../assets/border.svg";
import { Input } from "../components/Input";
import { loginInputs } from "../constants/authData";
import { loginSchema } from "../validation/login";

export const Route = createLazyFileRoute("/login")({
  component: Login
});

function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema)
  });

  const submitHandler = form.handleSubmit((data) => {});

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
        <form onSubmit={submitHandler} className="w-full space-y-4">
          <h1 className="mx-auto text-2xl font-bold uppercase">Login</h1>
          {loginInputs.map((login: string, i: number) => {
            const loweredCaseLogin: string = login.toLowerCase();
            return (
              <React.Fragment key={`loginInputs${i}`}>
                <Input
                  label={login}
                  name={loweredCaseLogin}
                  type={loweredCaseLogin.includes("password") ? "password" : "text"}
                />
              </React.Fragment>
            );
          })}
          <button className="rounded-md border border-gray-50 px-4 py-2 text-sm font-semibold uppercase" type="submit">
            Login
          </button>
        </form>
      </div>
    </FormProvider>
  );
}

export default Login;
