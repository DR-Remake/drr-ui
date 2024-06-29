import { Button } from "@/components/ui/Button";
import { charatersData } from "@/lib/charactersData";
import { cn } from "@/lib/utils";
import { updateAvatarRequest } from "@/rest/profile";
import { useAuth } from "@/zustand/store";
import { useState } from "react";

interface Props {
  currentAvatar?: string;
  onClose: () => void;
  onSuccess: () => void;
}
export default function UpdateAvatar({ onClose, onSuccess }: Props) {
  const [newAvatar, setNewAvatar] = useState<string | null>(null);
  // update useAuth store user with the new avatar
  const updateAvatar = useAuth((state) => state.updateAvatar);
  const token = useAuth((state) => state.token);
  const userEmail = useAuth((state) => state.user?.email);
  const currentAvatar = useAuth((state) => state.user?.avatar);
  const handleUpdateAvatar = async () => {
    try {
      if (!newAvatar) throw new Error("Please select an avatar");
      if (!token || !userEmail) throw new Error("Unauthorized");
      const {
        data: { avatar }
        // message
      } = await updateAvatarRequest({ avatar: newAvatar, token, userEmail });
      onSuccess();
      updateAvatar({ avatar: avatar });
      // toast.success(message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid max-h-60 grid-flow-row grid-cols-3 gap-6 overflow-auto md:max-h-96 md:grid-cols-6">
        {Object.keys(charatersData).map((key) => {
          if (key === currentAvatar) return null;
          const character = charatersData[key];
          return (
            <picture
              key={key}
              className={cn(
                "mx-auto size-14 md:size-24 overflow-hidden rounded-full select-none border-4 border-primary-foreground bg-cover bg-center",
                { "border-accent": newAvatar === key }
              )}
              onClick={() => setNewAvatar(key)}
            >
              <source srcSet={character.avif} className="w-full" />
              <source srcSet={character.webp} className="w-full" />
              <img src={character.default} alt={key} className="w-full" />
            </picture>
          );
        })}
      </div>
      <div className="flex justify-end gap-2">
        <Button
          variant="default"
          className="bg-[#4e1606] text-white hover:bg-[#4e1606] hover:opacity-90"
          onClick={() => {
            onClose();
            setNewAvatar(null);
          }}
        >
          Cancel
        </Button>
        <Button
          variant="default"
          className="bg-white text-[#4e1606] hover:bg-white hover:opacity-80"
          onClick={handleUpdateAvatar}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
