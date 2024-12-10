import React, { useRef } from "react";
import gsap from "gsap";

import heroBack from "../../assets/heroBack.png";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
function Hero() {
  const hero = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        delay: 2,
      });

      tl.from(".hero h2,.hero p", {
        x: -2000,
        duration: 2,
      });
      tl.from(".btn", {
        y: -100,
        opacity: 0,
        stagger:0.5,
        
      });

    },
    { scope: hero.current,}
  );
  return (
    <section
      ref={hero}
      className={`hero bg-[url(/heroBack.png)] h-screen bg-center sm: bg-cover`}
    >
      <div className="flex flex-col items-start justify-end h-full px-10 py-5 sm:py-20 text-white">
        <h2 className="text-white text-3xl">2023 Audi RS eTron GT</h2>
        <p className="text-xl text-white">Starting at $144,900</p>
        <div className="hero-btn hover:border-opacity-0 transition-all duration-500  flex flex-col sm:flex-row gap-2 sm:gap-4 my-4">
          <button className="btn px-x sm:px-6 py-3 rounded-xl bg-white text-black hover:border-opacity-0  hover:bg-black hover:text-white">
            Build & Price
          </button>
          <button className="btn hover:bg-black hover:text-white hover:border-opacity-0  bg-transparent border-2 border-white h-12 px-4 sm:px-5 rounded-xl">
            Get Audi news & Updates
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
