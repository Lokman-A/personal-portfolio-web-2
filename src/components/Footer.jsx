import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer container mx-auto my-40 text-center text-white/40 overflow-hidden">
      <p>
        &copy; {new Date().getFullYear()}
        <HashLink smooth to="#home" className="link-item hover:text-white">
          MD Lokman Hakim.
        </HashLink>
        Crafted by yours truly
      </p>
    </div>
  );
};

export default Footer;
