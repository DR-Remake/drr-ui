import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { verifyEmailRequest } from "@/rest/auth";
import { verifyEmailSchema } from "@/types/profile";
import { useAuth } from "@/zustand/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  onsubmit: () => void;
  onCancel: () => void;
}
export default function VerifyEmailForm({ onCancel, onsubmit }: Props) {
  const user = useAuth((state) => state.user);
  const form = useForm<z.infer<typeof verifyEmailSchema>>({
    defaultValues: {
      code: "",
      email: user?.email ?? ""
    },
    resolver: zodResolver(verifyEmailSchema)
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const { message } = await verifyEmailRequest(data);

      console.log(message);
      onsubmit();
    } catch (error) {
      console.error(error);
    }
  });
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <FormField
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verification Code</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col items-start gap-4">
          <Button variant="outline" type="button">
            Resend Code
          </Button>
          <div className="flex gap-4">
            <Button variant="default" type="button" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="default" type="submit">
              Verify
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
