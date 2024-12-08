import { ModalsContext } from "@/context/Modals";
import { useContext } from "react";
import Modal from "./Modal";
import { Button } from "./ui/Button";

export default function PrivacyPolicyModal() {
  const { privacySettingsOpened, setPrivacySettingsOpened } = useContext(ModalsContext);

  return (
    <Modal
      open={privacySettingsOpened}
      onOpenChange={setPrivacySettingsOpened}
      trigger={
        <Button variant="ghost" className="h-0 p-1 text-base font-bold uppercase hover:bg-inherit hover:text-inherit">
          Privacy policy
        </Button>
      }
      title="Privacy policy"
    >
      <div className="p-4">
        <p>
          We value your privacy and are committed to protecting your personal data. This privacy policy will inform you
          about how we look after your personal data when you play our dungeon game and tell you about your privacy
          rights and how the law protects you.
        </p>
        <h2 className="mt-4 font-semibold">1. Important Information and Who We Are</h2>
        <p>Dungeon Rampage is operated by [Company Name]. We are responsible for processing your personal data.</p>
        <h2 className="mt-4 font-semibold">2. The Data We Collect About You</h2>
        <p>
          We may collect, use, store, and transfer different kinds of personal data about you, which includes your email
          address.
        </p>
        <h2 className="mt-4 font-semibold">3. How We Use Your Personal Data</h2>
        <p>
          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data
          to manage your account and provide you with the game services. Your email address may also be used for sending
          you newsletters about game updates.
        </p>
        <h2 className="mt-4 font-semibold">4. Data Security</h2>
        <p>
          We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
          used, or accessed in an unauthorized way.
        </p>
        <h2 className="mt-4 font-semibold">5. Your Legal Rights</h2>
        <p>
          Under certain circumstances, you have rights under data protection laws in relation to your personal data,
          including the right to access, correct, or erase your personal data.
        </p>
      </div>
    </Modal>
  );
}
