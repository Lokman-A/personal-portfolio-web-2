import SectionTitle from "./SectionTitle";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    // Email JS
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
    e.target.querySelector(".send-message").value = "";
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
            type="text"
            name="fullname"
            required
            placeholder="Write your name"
            className="fullname bg-transparent outline-none py-16 px-28 border border-white/20 hover:bg-cyan-400/20 duration-500 rounded-full focus:border-cyan-400 w-full"
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="email"
            name="email"
            required
            placeholder="Write your email address"
            className="email bg-transparent outline-none py-16 px-28 border border-white/20 hover:bg-cyan-400/20 duration-500 rounded-full focus:border-cyan-400 w-full"
          />
        </div>
        <div className="form-control overflow-hidden">
          <textarea
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
