import borderImage from "@/assets/border.svg";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import NewsletterFormModal from "./components/NewsletterFormModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <NewsletterFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
        onSubmit={() => {
          setIsModalOpen(false);
        }}
      />
      <div
        className="h-[500px] w-5/6 rounded-md bg-primary bg-cover bg-center bg-no-repeat"
        style={{
          border: "20px solid",
          borderImage: `url(${borderImage}) 30`,
          borderImageSlice: "30"
        }}
      />
      <Button onClick={() => setIsModalOpen(true)}>Subscribe</Button>
    </div>
  );
}
