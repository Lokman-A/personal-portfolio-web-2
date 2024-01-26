import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://res.cloudinary.com/dbuszqydh/image/upload/v1705887214/Personal-portfolio2/Lokman_nowqzl.jpg",
  img2: "https://res.cloudinary.com/dbuszqydh/image/upload/v1706023392/Personal-portfolio2/11887873_1643054799295198_3572009199550971034_n_1643054799295198_hxnfb6.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);

  useHoverEffect(heroImageRef, data.img1, data.img2);
  return (
    <div className="hero container mx-auto mt-20  flex justify-center items-center">
      <div className="hero-image" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1>Full Stack</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
