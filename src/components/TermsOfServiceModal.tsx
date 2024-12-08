import { ModalsContext } from "@/context/Modals";
import { useContext } from "react";
import Modal from "./Modal";
import { Button } from "./ui/Button";

export default function TermsOfServiceModal() {
  const { termsOfUseOpened, setTermsOfUseOpened } = useContext(ModalsContext);
  return (
    <Modal
      open={termsOfUseOpened}
      onOpenChange={setTermsOfUseOpened}
      trigger={
        <Button variant="ghost" className="h-0 p-1 text-base font-bold uppercase hover:bg-inherit hover:text-inherit">
          Terms of use
        </Button>
      }
      title="Terms of use"
    >
      <div className="p-4">
        <p>
          Welcome to Dungeon Rampage! By using our game, you agree to the following terms and conditions. Please read
          them carefully.
        </p>
        <h2 className="mt-4 font-bold">1. Acceptance of Terms</h2>
        <p>
          By accessing and playing Dungeon Rampage, you agree to be bound by these terms of service. If you do not agree
          with any part of these terms, you must not use our game.
        </p>
        <h2 className="mt-4 font-bold">2. User Information</h2>
        <p>
          To enhance your gaming experience, we may collect your email address. This information will be used to provide
          you with important updates about the game and may also be used to send you our newsletter. We are committed to
          protecting your privacy and will not share your email address with third parties without your consent.
        </p>
        <h2 className="mt-4 font-bold">3. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Any changes will be effective immediately upon
          posting. Your continued use of the game after any changes signifies your acceptance of the new terms.
        </p>
        <h2 className="mt-4 font-bold">4. Contact Us</h2>
        <p>If you have any questions or concerns about these terms, please contact us at support@dungeonrampage.com.</p>
      </div>
    </Modal>
  );
}
