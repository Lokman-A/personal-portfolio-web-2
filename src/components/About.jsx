import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://res.cloudinary.com/dbuszqydh/image/upload/v1706972464/Personal-portfolio2/Lokman-removebg_1_wakn2j.png",
  img2: "https://res.cloudinary.com/dbuszqydh/image/upload/v1706023392/Personal-portfolio2/11887873_1643054799295198_3572009199550971034_n_1643054799295198_hxnfb6.jpg",
};

const About = () => {
  const aboutRef = useRef(null);
  useHoverEffect(aboutRef, data.img1, data.img2);
  return (
    <div className="about mt-40 pb-30" id="about">
      <SectionTitle title={"About"} />

      <div className="about-container mt-52 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left hero-image rounded-xl" ref={aboutRef}></div>
        <div className="about-right flex flex-col gap-10 ">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            eveniet, error nesciunt rerum illo aspernatur tempore obcaecati
            dolores suscipit veniam dicta vitae reprehenderit. Molestias aut ut
            accusamus dolores nesciunt sint labore itaque optio obcaecati
            tenetur animi dignissimos officiis doloribus eos quos incidunt esse
            dolorem, commodi debitis repellat. Itaque perferendis rem error
            quibusdam harum quis magnam deleniti veritatis veniam, nobis
            expedita blanditiis facilis laborum quo, tenetur quos explicabo nisi
            itaque? Aliquam nulla deserunt nemo rerum libero, aspernatur tenetur
            animi dignissimos officiis doloribus eos quos incidunt esse dolorem,
            commodi debitis repellat. Itaque perferendis rem error quibusdam
            harum quis magnam deleniti veritatis veniam, nobis expedita
            blanditiis facilis laborum quo, tenetur quos explicabo nisi itaque?
            Aliquam nulla deserunt nemo rerum libero, aspernatur
          </p>

          <a
            href="http://www.github.com/"
            target="_blank"
            rel=" noreferrer"
            className="flex justify-center text-2xl uppercase border rounded-full border-white/20 py-6 px-14 hover:bg-cyan-400/50 hover:border-white duration-500 "
          >
            view resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
