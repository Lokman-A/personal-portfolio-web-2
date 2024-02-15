import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useGsapNavReveal } from "../hooks/gsap";

// eslint-disable-next-line react/prop-types
const Navbar = ({ footerNav }) => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);
  const link7Ref = useRef(null);

  const linkArr = [
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    link5Ref,
    link6Ref,
    link7Ref,
  ];

  useGsapNavReveal(linkArr, 3);

  return (
    <div
      className={`navbar ${
        footerNav ? "mt-52" : "mt-20"
      } flex justify-between container mx-auto uppercase`}
    >
      <div className="logo" ref={link1Ref}>
        <HashLink
          className={` ${
            footerNav ? "" : "font-extrabold mix-blend-color-dodge"
          } link-item text-4xl `}
          smooth
          to="#home"
        >
          {footerNav ? "Goto Top" : "Lokman Hakim"}
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li ref={link2Ref}>
          <HashLink smooth to="#home" className="link-item">
            Home
          </HashLink>
        </li>
        <li ref={link3Ref}>
          <HashLink smooth to="#project" className="link-item">
            Projects
          </HashLink>
        </li>
        <li ref={link4Ref}>
          <HashLink smooth to="#skills" className="link-item">
            skills
          </HashLink>
        </li>
        <li ref={link5Ref}>
          <HashLink smooth to="#about" className="link-item">
            About
          </HashLink>
        </li>
        <li ref={link6Ref}>
          <HashLink smooth to="#contact" className="link-item">
            Contact
          </HashLink>
        </li>
        <li ref={link7Ref}>
          <a
            href="https://www.google.com/"
            className="link-item"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
