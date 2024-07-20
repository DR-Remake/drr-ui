import Modal from "@/components/Modal";
import ResendButton from "@/components/ResendButton";
import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { getNewVerificationCode, verifyEmailRequest } from "@/rest/auth";
import { verifyEmailSchema } from "@/types/profile";
import { useAuth } from "@/zustand/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  open: boolean;
  onsubmit: () => void;
  onCancel: () => void;
}
export default function VerifyEmailForm({ open, onCancel, onsubmit }: Props) {
  const user = useAuth((state) => state.user);
  const token = useAuth((state) => state.token);
  const form = useForm<z.infer<typeof verifyEmailSchema>>({
    defaultValues: {
      code: "",
      email: user?.email ?? ""
    },
    resolver: zodResolver(verifyEmailSchema)
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      if (!token) throw new Error("Token is missing");
      const { message } = await verifyEmailRequest({ ...data, token });
      console.log(message);
      onsubmit();
    } catch (error) {
      console.error(error);
    }
  });

  const getVerificationCode = async () => {
    try {
      if (!user || !token) return;
      const { message } = await getNewVerificationCode({ email: user.email, token });
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Modal open={open} onOpenChange={onCancel} title="Verify Email">
      <Form {...form}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
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
          <div className="flex flex-col items-start gap-2">
            <ResendButton handleClick={getVerificationCode} />
            <div className="flex gap-2">
              <Button
                variant="default"
                className="bg-[#4e1606] text-white hover:bg-[#4e1606] hover:opacity-80"
                type="button"
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                variant="default"
                className="bg-white text-[#4e1606] hover:bg-white hover:opacity-80"
                type="submit"
              >
                Verify
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </Modal>
  );
}
