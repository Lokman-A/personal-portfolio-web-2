import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: " https://images.pexels.com/photos/1567730/pexels-photo-1567730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  img2: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
