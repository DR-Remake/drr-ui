import { cn } from "@/lib/utils";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogTitle } from "./ui/Dialog";

export default function Modal({
  open,
  onOpenChange,
  title,
  trigger,
  className,
  children
}: {
  children: React.ReactNode;
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: string;
  className?: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent
        className={cn("bg-background text-white max-h-[80%] max-w-[90%] overflow-auto rounded-lg", className)}
        aria-describedby=""
      >
        <DialogTitle className="text-center">
          <h3 className="text-3xl font-bold">{title}</h3>
        </DialogTitle>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
