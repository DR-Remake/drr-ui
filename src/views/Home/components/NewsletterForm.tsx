import playNowButton from "@/assets/play_now_btn.png";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { siteConfig } from "@/config/siteConfig";
import { ModalsContext } from "@/context/Modals";
import { NewsletterSchema } from "@/types/newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  onSubmit: () => void;
}

export default function NewsletterForm({ onSubmit }: Props) {
  const { setTermsOfUseOpened, setPrivacySettingsOpened } = useContext(ModalsContext);

  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    },
    resolver: zodResolver(NewsletterSchema)
  });

  const { mutate: subscribe } = useMutation({
    mutationKey: ["subscribeNewsletterUser"],
    mutationFn: async ({ email, password, username }: z.infer<typeof NewsletterSchema>) => {
      await fetch(`${siteConfig.env.BASE_API}/newsletter/subscribe`, {
        method: "POST",
        body: JSON.stringify({ email, password, username }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    },
    onSuccess: () => {
      console.log("User subscribed to newsletter");
    }
  });

  const submitHanlder = form.handleSubmit((data) => {
    try {
      console.log(data);
      subscribe(data);
      onSubmit();
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <Form {...form}>
      <div className="mb-4 text-center">
        <h1 className="text-xl font-bold uppercase">Newsletter</h1>
        {/* <p className="text-sm">Get the latest news and updates from us</p> */}
      </div>
      <form onSubmit={submitHanlder} className="flex flex-col items-start gap-4">
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem className="grid w-full grid-cols-4 items-center gap-x-2">
              <FormLabel className="font-bold">Username</FormLabel>
              <FormControl>
                <Input className="col-span-3 w-full" {...field} />
              </FormControl>
              <FormMessage className="col-span-4 row-span-1 text-xs" />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem className="grid w-full grid-cols-4 items-center gap-x-2 space-y-1">
              <FormLabel className="font-bold">Email</FormLabel>
              <FormControl>
                <Input className="col-span-3 w-full" {...field} />
              </FormControl>
              <FormMessage className="col-span-4 row-span-1 text-xs" />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem className="grid w-full grid-cols-4 items-center gap-x-2 space-y-1">
              <FormLabel className="font-bold">Password</FormLabel>
              <FormControl>
                <Input className="col-span-3 w-full" {...field} type="password" />
              </FormControl>
              <FormMessage className="col-span-4 row-span-1 text-xs" />
            </FormItem>
          )}
        />
        <FormField
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="grid w-full grid-cols-4 items-center gap-x-2 space-y-1">
              <FormLabel className="font-bold">Confirm Password</FormLabel>
              <FormControl>
                <Input className="col-span-3 w-full" {...field} type="password" />
              </FormControl>
              <FormMessage className="col-span-4 row-span-1 text-xs" />
            </FormItem>
          )}
        />
        <Button type="submit" className="relative m-auto w-8/12">
          <img src={playNowButton} alt="play-now" className="absolute w-full" />
        </Button>
      </form>
      <div className="mt-2 text-center text-xs">
        <p className="text-balance">
          By clicking "Play Now" you agree to the{" "}
          <span className="cursor-pointer font-extrabold underline" onClick={() => setTermsOfUseOpened(true)}>
            Terms of Use
          </span>{" "}
          and{" "}
          <span className="cursor-pointer font-extrabold underline" onClick={() => setPrivacySettingsOpened(true)}>
            Privacy Policy
          </span>
        </p>
      </div>
    </Form>
  );
}
