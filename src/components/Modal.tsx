import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "./ui/Dialog";

export default function Modal({
  open,
  onOpenChange,
  title,
  className,
  children
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      <DialogContent className={cn("bg-background text-white", className)} aria-describedby="">
        <DialogTitle className="text-center">
          <h3 className="text-3xl font-bold">{title}</h3>
        </DialogTitle>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
