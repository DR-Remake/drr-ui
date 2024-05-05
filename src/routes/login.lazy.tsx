import borderImage from "@/assets/border.svg";
import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginRequest } from "../rest/auth";
import { LoginSchema } from "../types/login";
import { useAuth } from "../zustand/store";

export const Route = createLazyFileRoute("/login")({
  component: Login
});

function Login() {
  const login = useAuth((state) => state.login);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof LoginSchema>>({
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: zodResolver(LoginSchema)
  });

  const submitHandler = form.handleSubmit(async (data) => {
    try {
      const { token, user } = await loginRequest(data);

      localStorage.setItem("session", token);
      login({ user, isAuthenticated: true, token });
      navigate({ to: "/" });
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Form {...form}>
      <div
        className="mx-auto flex w-2/4 flex-col items-start gap-4 rounded-md border-4 bg-primary p-8"
        style={{
          border: "20px solid",
          borderImage: `url(${borderImage}) 20`,
          borderImageSlice: "24"
        }}
      >
        <h1 className="mx-auto text-2xl font-bold uppercase">Login</h1>
        <form className="w-full space-y-4" onSubmit={submitHandler}>
          <FormField
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    className={cn("text-black", {
                      "border-red-500": form.formState.errors.username
                    })}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className={cn("text-black", {
                      "border-red-500": form.formState.errors.password
                    })}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="default" type="submit">
            Login
          </Button>
        </form>
      </div>
    </Form>
  );
}
