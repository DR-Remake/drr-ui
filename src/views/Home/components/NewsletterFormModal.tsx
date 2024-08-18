import Modal from "@/components/Modal";
import NewsletterForm from "./NewsletterForm";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export default function NewsletterFormModal({ isOpen, onClose, onSubmit }: Props) {
  return (
    <Modal open={isOpen} onOpenChange={onClose} title="Subscribe to our newsletter">
      <NewsletterForm onSubmit={onSubmit} />
    </Modal>
  );
}
