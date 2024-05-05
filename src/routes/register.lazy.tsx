import borderImage from "@/assets/border.svg";
import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { registerRequest } from "@/rest/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterSchema } from "../types/register";
import { useAuth } from "../zustand/store";

export const Route = createLazyFileRoute("/register")({
  component: Register
});

function Register() {
  const login = useAuth((state) => state.login);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema)
  });

  const navigate = useNavigate();

  const submitHandler = form.handleSubmit(async (data) => {
    try {
      const { token, user } = await registerRequest(data);
      localStorage.setItem("session", token);
      login({ token, user, isAuthenticated: true });
      // toast.success(message);
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
          borderImageSlice: "30"
        }}
      >
        <h1 className="mx-auto text-2xl font-bold uppercase">Create New Account</h1>
        <form onSubmit={submitHandler} className="w-full space-y-4">
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className={cn("text-black", {
                      "border-red-500": form.formState.errors.email
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
          <FormField
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className={cn("text-black", {
                      "border-red-500": form.formState.errors.passwordConfirmation
                    })}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="default" type="submit">
            Create
          </Button>
        </form>
      </div>
    </Form>
  );
}
