import hoverEffect from "hover-effect";
import { useEffect } from "react";
import cloudImage from "../assets/images/cloud.png";

export const useHoverEffect = (el, img1, img2) => {
  useEffect(() => {
    new hoverEffect({
      parent: el.current,
      image1: img1,
      image2: img2,
      displacementImage: cloudImage,
      intensity: 0.5,
    });
  }, [el, img1, img2]);
};
