import { useEffect, useState } from "react";
import { Button } from "./ui/Button";

interface Props {
  handleClick: () => void;
}

export default function ResendButton({ handleClick }: Props) {
  const [counter, setCounter] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    if (counter === 0) {
      clearInterval(countdown);
      setIsButtonDisabled(false);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [counter]);

  const handleButtonClick = () => {
    setIsButtonDisabled(true);
    setCounter(60);
    handleClick();
  };

  return (
    <div>
      <Button
        variant="link"
        className="h-min p-0 py-1"
        disabled={isButtonDisabled}
        onClick={handleButtonClick}
        type="button"
      >
        Resend Code
      </Button>
      {isButtonDisabled && <p> Resend in {counter} seconds.</p>}
    </div>
  );
}
