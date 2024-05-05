import borderImage from "@/assets/border.svg";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import VerifyEmailForm from "./components/VerifyForm";

export default function Profile() {
  const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Modal open={isVerifyEmailModalOpen} onOpenChange={setIsVerifyEmailModalOpen} title="Verify Email">
        <VerifyEmailForm
          onCancel={() => setIsVerifyEmailModalOpen(false)}
          onsubmit={() => setIsVerifyEmailModalOpen(false)}
        />
      </Modal>
      <div
        className="h-[500px] w-5/6 rounded-md bg-primary bg-cover bg-center bg-no-repeat"
        style={{
          border: "20px solid",
          borderImage: `url(${borderImage}) 30`,
          borderImageSlice: "30"
        }}
      >
        <Button variant="default" onClick={() => setIsVerifyEmailModalOpen(true)}>
          Verify Email
        </Button>
      </div>
    </div>
  );
}
