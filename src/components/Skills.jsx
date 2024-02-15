import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useSkillLineReveal, useSkillTextReveal } from "../hooks/gsap";

const data = [
  { id: 1, name: "HTML" },
  { id: 2, name: "css" },
  { id: 3, name: "bootstrap" },
  { id: 4, name: "Tailwind css" },
  { id: 5, name: "JavaScript" },
  { id: 6, name: "React js" },
  { id: 7, name: "React Router" },
  { id: 8, name: "Redux js" },
  { id: 9, name: "Redux Toolkit" },
  { id: 10, name: "Axios" },
  { id: 11, name: "Gsap" },
  { id: 12, name: "Firebase" },
  { id: 13, name: "Web PenTester" },
  { id: 14, name: "Kali Linux" },
];

const Skills = () => {
  const skillItemRef = useRef([]);
  const skillTextRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillText2Ref = useRef([]);

  useSkillLineReveal(skillItemRef.current);
  useSkillLineReveal(skillItem2Ref.current);
  useSkillTextReveal(skillTextRef.current);
  useSkillTextReveal(skillText2Ref.current);

  return (
    <div className="skill container mx-auto mt-40 " id="skills">
      <SectionTitle title={"Skills"} />

      <div className="skills-wrapper mt-40 grid grid-cols-2 gap-10 capitalize">
        <ul className="skill-left flex flex-col gap-10 col-span-1 mt-40">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name"> {skill.name} </span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skill-right flex flex-col gap-10 mt-40">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-item overflow-hidden"
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className="flex gap-10 items-baseline"
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name"> {skill.name} </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
