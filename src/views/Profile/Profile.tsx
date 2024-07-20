import borderImage from "@/assets/border.svg";
import { Button } from "@/components/ui/Button";
import { charatersData } from "@/lib/charactersData";
import { useAuth } from "@/zustand/store";
import { useState } from "react";
import UpdateAvatar from "./components/UpdateAvatar";
import VerifyEmailForm from "./components/VerifyForm";

export default function Profile() {
  const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false);
  const [isUpdateAvatarModalOpen, setIsUpdateAvatarModalOpen] = useState(false);
  const user = useAuth((state) => state.user);

  const toggleVerifyEmailModal = () => {
    setIsVerifyEmailModalOpen(!isVerifyEmailModalOpen);
  };

  const toggleUpdateAvatarModal = () => {
    setIsUpdateAvatarModalOpen(!isUpdateAvatarModalOpen);
  };

  return (
    <>
      <VerifyEmailForm
        open={isVerifyEmailModalOpen}
        onCancel={toggleVerifyEmailModal}
        onsubmit={toggleVerifyEmailModal}
      />
      <UpdateAvatar
        open={isUpdateAvatarModalOpen}
        onClose={toggleUpdateAvatarModal}
        onSuccess={toggleUpdateAvatarModal}
      />
      <div className="flex w-full flex-col items-center gap-4">
        <div
          className="h-[500px] w-5/6 space-y-2 rounded-md bg-primary bg-cover bg-center bg-no-repeat text-center"
          style={{
            border: "20px solid",
            borderImage: `url(${borderImage}) 30`,
            borderImageSlice: "30"
          }}
        >
          <h1 className="text-6xl font-bold text-primary-foreground">Profile</h1>
          <div
            className="mx-auto size-32 overflow-hidden rounded-full border-4 border-primary-foreground bg-cover bg-center"
            onClick={toggleUpdateAvatarModal}
          >
            <picture>
              <source srcSet={charatersData[user?.avatar ? user.avatar : "berserker"].avif} className="w-full" />
              <source srcSet={charatersData[user?.avatar ? user.avatar : "berserker"].webp} className="w-full" />
              <img src={charatersData[user?.avatar ? user.avatar : "berserker"].webp} alt="avatar" className="w-full" />
            </picture>
          </div>
          <p className="text-lg text-primary-foreground">Welcome {user?.username}</p>
          <p className="text-lg text-primary-foreground">Your email is {user?.email}</p>
          <p className="text-lg text-primary-foreground">
            Your email is {user?.isVerifiedEmail ? "verified" : "not verified, please verify your email:"}
          </p>
          {user && !user.isVerifiedEmail && (
            <Button
              className="bg-[#4e1606] text-white hover:bg-[#4e1606] hover:opacity-80"
              onClick={toggleVerifyEmailModal}
            >
              Verify Email
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
