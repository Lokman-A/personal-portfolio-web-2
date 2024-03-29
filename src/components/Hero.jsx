import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import {
  useGsapTitleRevealLeft,
  useGsapTitleRevealRight,
  useHeroImageReveal,
} from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/dbuszqydh/image/upload/v1706971950/Personal-portfolio2/Lokman-removebg_qmyhwd.png",
  img2: "https://res.cloudinary.com/dbuszqydh/image/upload/v1706023392/Personal-portfolio2/11887873_1643054799295198_3572009199550971034_n_1643054799295198_hxnfb6.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);

  useHeroImageReveal(heroImageRef);
  useGsapTitleRevealLeft(title1Ref, 2);
  useGsapTitleRevealRight(title2Ref, 2);

  useHoverEffect(heroImageRef, data.img1, data.img2);
  return (
    <div className="hero container mx-auto mt-20  flex justify-center items-center">
      <div
        className="hero-image cursor-pointer rounded-sm"
        ref={heroImageRef}
      ></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={title1Ref}>Fron-End</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={title2Ref}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
