import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { siteConfig } from "@/config/siteConfig";
import { NewsletterSchema } from "@/types/newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  onSubmit: () => void;
}

export default function NewsletterForm({ onSubmit }: Props) {
  const form = useForm({
    defaultValues: {
      email: ""
    },
    resolver: zodResolver(NewsletterSchema)
  });

  const { mutate: subscribe } = useMutation({
    mutationKey: ["subscribeNewsletter"],
    mutationFn: async ({ email }: z.infer<typeof NewsletterSchema>) => {
      fetch(`${siteConfig.env.BASE_API}/newsletter`, {
        method: "POST",
        body: JSON.stringify({ email })
      });
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
        <h1 className="text-2xl font-bold">Subscribe to our newsletter</h1>
        <p className="text-sm">Get the latest news and updates from us</p>
      </div>
      <form onSubmit={submitHanlder} className="flex flex-col items-start gap-4">
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="m-auto w-4/5 bg-white text-lg font-bold uppercase text-primary hover:bg-white">
          Subscribe
        </Button>
      </form>
    </Form>
  );
}
