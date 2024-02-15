const data = [
  { id: 1, name: "Facebook", link: "http://www.facebook.com/" },
  { id: 2, name: "Google", link: "http://www.google.com/" },
  { id: 3, name: "Github", link: "http://www.github.com" },
  { id: 4, name: "LinkDin", link: "http://www.linkdin.com/" },
  { id: 5, name: "Instagram", link: "http://www.instagram.com/" },
];

const Socials = () => {
  return (
    <div className="socials mt-40 overflow-hidden">
      <div className="socials-wrapper mt-40 flex gap-10 fixed top-[70%] right-[5%] rotate-90 origin-right">
        {data.map((social) => (
          <a
            className="text-sm text-white/40 uppercase hover:text-cyan-400 duration-300"
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noreferrer"
          >
            {social.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;
