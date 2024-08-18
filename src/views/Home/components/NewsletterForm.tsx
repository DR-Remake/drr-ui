import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { siteConfig } from "@/config/siteConfig";
import { NewsletterSchema } from "@/types/newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

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
    mutationFn: async ({ email }: { email: string }) => {
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
      <form onSubmit={submitHanlder} className="flex flex-col items-start gap-1">
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
        <Button type="submit">Subscribe</Button>
      </form>
    </Form>
  );
}
