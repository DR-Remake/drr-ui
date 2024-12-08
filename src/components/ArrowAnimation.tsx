import "@/animations.css";
import arrow from "@/assets/dr_arrow/shapes/26.png";
import { useEffect } from "react";

interface Props {
  delay?: number;
  side?: "left" | "right";
}

export default function ArrowAnimation({ delay = 5000, side = "right" }: Props) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const arrow = document.getElementById("arrow");
      if (arrow) {
        arrow.classList.toggle("hidden");
        arrow.classList.toggle(side === "right" ? "right-arrow-animation" : "left-arrow-animation");
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [delay, side]);

  return (
    <>
      <img id="arrow" className="absolute -z-10 hidden" src={arrow} />
    </>
  );
}
