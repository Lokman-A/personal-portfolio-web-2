import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useFooterReveal } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  useFooterReveal(footerRef, 3);
  return (
    <div className="footer container mx-auto my-40 text-center text-white/40 overflow-hidden">
      <p ref={footerRef}>
        &copy; {(new Date().getFullYear(), " ")}
        <HashLink smooth to="#home" className="link-item hover:text-white">
          MD. Lokman Hakim{" "}
        </HashLink>
        Crafted by yours truly
      </p>
    </div>
  );
};

export default Footer;
