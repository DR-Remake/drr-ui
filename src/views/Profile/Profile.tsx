import borderImage from "@/assets/border.svg";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/zustand/store";
import { useState } from "react";
import VerifyEmailForm from "./components/VerifyForm";

export default function Profile() {
  const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false);
  const user = useAuth((state) => state.user);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Modal open={isVerifyEmailModalOpen} onOpenChange={setIsVerifyEmailModalOpen} title="Verify Email">
        <VerifyEmailForm
          onCancel={() => setIsVerifyEmailModalOpen(false)}
          onsubmit={() => setIsVerifyEmailModalOpen(false)}
        />
      </Modal>
      <div
        className="h-[500px] w-5/6 space-y-2 rounded-md bg-primary bg-cover bg-center bg-no-repeat text-center"
        style={{
          border: "20px solid",
          borderImage: `url(${borderImage}) 30`,
          borderImageSlice: "30"
        }}
      >
        <h1 className="text-6xl font-bold text-primary-foreground">Profile</h1>
        <p className="text-lg text-primary-foreground">Welcome {user?.username}</p>
        <p className="text-lg text-primary-foreground">Your email is {user?.email}</p>
        <p className="text-lg text-primary-foreground">
          Your email is {user?.isEmailVerified ? "verified" : "not verified, please verify your email:"}
        </p>
        {!user?.isEmailVerified && (
          <Button
            variant="default"
            className="bg-white text-primary hover:bg-white hover:opacity-80"
            onClick={() => setIsVerifyEmailModalOpen(true)}
          >
            Verify Email
          </Button>
        )}
      </div>
    </div>
  );
}
