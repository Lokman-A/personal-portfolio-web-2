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
        <div className="btn flex gap-10 my-10 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel=" noreferrer"
            className=" text-2xl uppercase border rounded-full border-white/20 py-6 px-14 hover:bg-cyan-400/50 hover:border-white duration-300"
          >
            Live Site
          </a>
          <a
            href={project.backEndLink}
            target="_blank"
            rel=" noreferrer"
            className=" text-2xl uppercase border rounded-full border-white/20 py-6 px-14 hover:bg-cyan-400/50 hover:border-white duration-300"
          >
            frond-end code
          </a>
          {project?.backEndLink && (
            <a
              href={project.frontEndLink}
              target="_blank"
              rel=" noreferrer"
              className=" text-2xl uppercase border rounded-full border-white/20 py-6 px-14 hover:bg-cyan-400/50 hover:border-white duration-300"
            >
              back-End code
            </a>
          )}
        </div>
      </div>
      <div
        className="project-right col-span-2 justify-self-end cursor-pointer rounded-md"
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;
