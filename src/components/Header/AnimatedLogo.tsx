import animatedLogo1 from "@/assets/dr_logo/1.png";
import animatedLogo2 from "@/assets/dr_logo/2.png";
import animatedLogo3 from "@/assets/dr_logo/3.png";
import animatedLogo4 from "@/assets/dr_logo/4.png";
import animatedLogo5 from "@/assets/dr_logo/5.png";
import animatedLogo6 from "@/assets/dr_logo/6.png";
import animatedLogo7 from "@/assets/dr_logo/7.png";
import animatedLogo8 from "@/assets/dr_logo/8.png";
import animatedLogo9 from "@/assets/dr_logo/9.png";
import animatedLogo10 from "@/assets/dr_logo/10.png";
import animatedLogo11 from "@/assets/dr_logo/11.png";
import animatedLogo12 from "@/assets/dr_logo/12.png";
import animatedLogo13 from "@/assets/dr_logo/13.png";
import animatedLogo14 from "@/assets/dr_logo/14.png";
import animatedLogo15 from "@/assets/dr_logo/15.png";
import animatedLogo16 from "@/assets/dr_logo/16.png";
import animatedLogo17 from "@/assets/dr_logo/17.png";
import animatedLogo18 from "@/assets/dr_logo/18.png";
import animatedLogo19 from "@/assets/dr_logo/19.png";
import animatedLogo20 from "@/assets/dr_logo/20.png";
import animatedLogo21 from "@/assets/dr_logo/21.png";
import animatedLogo22 from "@/assets/dr_logo/22.png";
import animatedLogo23 from "@/assets/dr_logo/23.png";
import animatedLogo24 from "@/assets/dr_logo/24.png";
import animatedLogo25 from "@/assets/dr_logo/25.png";
import animatedLogo26 from "@/assets/dr_logo/26.png";
import animatedLogo27 from "@/assets/dr_logo/27.png";
import animatedLogo28 from "@/assets/dr_logo/28.png";
import animatedLogo29 from "@/assets/dr_logo/29.png";
import animatedLogo30 from "@/assets/dr_logo/30.png";
import animatedLogo31 from "@/assets/dr_logo/31.png";
import animatedLogo32 from "@/assets/dr_logo/32.png";
import animatedLogo33 from "@/assets/dr_logo/33.png";
import animatedLogo34 from "@/assets/dr_logo/34.png";
import animatedLogo35 from "@/assets/dr_logo/35.png";
import animatedLogo36 from "@/assets/dr_logo/36.png";
import animatedLogo37 from "@/assets/dr_logo/37.png";
import animatedLogo38 from "@/assets/dr_logo/38.png";
import animatedLogo39 from "@/assets/dr_logo/39.png";
import animatedLogo40 from "@/assets/dr_logo/40.png";
import animatedLogo41 from "@/assets/dr_logo/41.png";
import animatedLogo42 from "@/assets/dr_logo/42.png";
import animatedLogo43 from "@/assets/dr_logo/43.png";
import animatedLogo44 from "@/assets/dr_logo/44.png";
import animatedLogo45 from "@/assets/dr_logo/45.png";
import animatedLogo46 from "@/assets/dr_logo/46.png";
import animatedLogo47 from "@/assets/dr_logo/47.png";
import animatedLogo48 from "@/assets/dr_logo/48.png";
import animatedLogo49 from "@/assets/dr_logo/49.png";
import animatedLogo50 from "@/assets/dr_logo/50.png";
import animatedLogo51 from "@/assets/dr_logo/51.png";
import animatedLogo52 from "@/assets/dr_logo/52.png";
import animatedLogo53 from "@/assets/dr_logo/53.png";
import animatedLogo54 from "@/assets/dr_logo/54.png";
import animatedLogo55 from "@/assets/dr_logo/55.png";
import animatedLogo56 from "@/assets/dr_logo/56.png";
import { useEffect, useState } from "react";

const animatedLogo = [
  animatedLogo1,
  animatedLogo2,
  animatedLogo3,
  animatedLogo4,
  animatedLogo5,
  animatedLogo6,
  animatedLogo7,
  animatedLogo8,
  animatedLogo9,
  animatedLogo10,
  animatedLogo11,
  animatedLogo12,
  animatedLogo13,
  animatedLogo14,
  animatedLogo15,
  animatedLogo16,
  animatedLogo17,
  animatedLogo18,
  animatedLogo19,
  animatedLogo20,
  animatedLogo21,
  animatedLogo22,
  animatedLogo23,
  animatedLogo24,
  animatedLogo25,
  animatedLogo26,
  animatedLogo27,
  animatedLogo28,
  animatedLogo29,
  animatedLogo30,
  animatedLogo31,
  animatedLogo32,
  animatedLogo33,
  animatedLogo34,
  animatedLogo35,
  animatedLogo36,
  animatedLogo37,
  animatedLogo38,
  animatedLogo39,
  animatedLogo40,
  animatedLogo41,
  animatedLogo42,
  animatedLogo43,
  animatedLogo44,
  animatedLogo45,
  animatedLogo46,
  animatedLogo47,
  animatedLogo48,
  animatedLogo49,
  animatedLogo50,
  animatedLogo51,
  animatedLogo52,
  animatedLogo53,
  animatedLogo54,
  animatedLogo55,
  animatedLogo56
];

export default function AnimatedLogo() {
  const [logo, setLogo] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogo((prevLogo) => (prevLogo >= 56 ? 1 : prevLogo + 1));
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return <img className="w-64" src={animatedLogo[logo - 1]} />;
}
