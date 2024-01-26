/* eslint-disable react/prop-types */
import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const Project = ({ project }) => {
  const projectRightRef = useRef(null);

  useHoverEffect(projectRightRef, project.img1, project.img2);
  return (
    <div className="project grid grid-cols-5">
      <div className="project-left col-span-3 my-40 ">
        <span className="text-8xl text-white/20 ">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="text-5xl uppercase leading-relaxed text-cyan-400 my-10">
          {project.title}
        </h3>
        <span className="project-details text-white/75">
          {project.description}
        </span>
        <span className="text-cyan-400 flex gap-10 flex-wrap">
          {project.tools.map((tool, i) => (
            <span key={i}>{tool}</span>
          ))}
        </span>
      </div>
      <div
        className="project-right col-span-2 justify-self-end "
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;
