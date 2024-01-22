import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="navbar mt-20 flex justify-between container mx-auto uppercase">
      <div className=" logo">
        <HashLink className="link-item" smooth to="#home">
          Lokman Hakim
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink smooth to="#home" className="link-item">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#project" className="link-item">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item">
            skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link-item">
            Contact
          </HashLink>
        </li>
        <li>
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
