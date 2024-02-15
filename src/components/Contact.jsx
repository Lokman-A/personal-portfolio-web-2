import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useFormControlReveal } from "../hooks/gsap";

const Contact = () => {
  const formControl1Ref = useRef(null);
  const formControl2Ref = useRef(null);
  const formControl3Ref = useRef(null);
  const formControl4Ref = useRef(null);
  const formControlArr = [
    formControl1Ref,
    formControl2Ref,
    formControl3Ref,
    formControl4Ref,
  ];

  useFormControlReveal(formControlArr);
  const sendEmail = (e) => {
    e.preventDefault();
    // Email JS integration
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="contact mt-40" id="contact">
      <SectionTitle title="Contact" />

      <form
        onSubmit={sendEmail}
        className="form mt-40 overflow-hidden grid grid-cols-2 gap-20"
      >
        <div className="form-control overflow-hidden">
          <input
            ref={formControl1Ref}
            type="text"
            name="fullname"
            required
            placeholder="Write your name"
            className="fullname bg-transparent outline-none py-16 px-28 border border-white/20 hover:bg-cyan-400/20 duration-500 rounded-full focus:border-cyan-400 w-full"
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            ref={formControl2Ref}
            type="email"
            name="email"
            required
            placeholder="Write your email address"
            className="email bg-transparent outline-none py-16 px-28 border border-white/20 hover:bg-cyan-400/20 duration-500 rounded-full focus:border-cyan-400 w-full"
          />
        </div>
        <div className="form-control overflow-hidden">
          <textarea
            ref={formControl3Ref}
            placeholder="Write your message"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent outline-none py-16 px-28 border border-white/20 hover:bg-cyan-400/20 duration-500 rounded-full focus:border-cyan-400 w-full resize-none"
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            ref={formControl4Ref}
            type="submit"
            value="Send message"
            className="send-message uppercase py-16 px-28 border border-white/20 hover:bg-cyan-400/20 duration-500 rounded-full hover:border-cyan-400 w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
