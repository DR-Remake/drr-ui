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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>
          <h3 className="text-2xl font-bold">{title}</h3>
        </DialogTitle>
        <div className={cn(className)}>{children}</div>
      </DialogContent>
    </Dialog>
  );
}
