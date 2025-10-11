import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJs,
} from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import TechStacks from "./TechStacks";

const IconItem = ({ Icon, size = 36, className = "" }) => {
  if (!Icon) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`flex items-center justify-center ${className}`}
      >
        ?
      </div>
    );
  }
  return <Icon size={size} className={className} />;
};

export default function ProjectSection({ projects }) {
  const leftIcons = [FaReact, FaHtml5, FaCss3Alt, FaJs];
  const rightIcons = [FaNodeJs, FaJs, FaReact];
  const duration = 8; // durasi loop (detik)
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="flex flex-row text-white py-10 p-20 bg-[#1A1A1D] gap-8">
      <div className="w-1/2 flex flex-col sticky h-fit self-start top-25">
        <div className="w-10 h-[2px] bg-sky-500 rounded-full mb-4"></div>
        <h1 className="text-4xl font-bold mb-2 text-white">
          Featured Projects
        </h1>
        <p className="text-white/60 mb-8 w-3/4 leading-relaxed text-sm">
          A selection of my website projects
        </p>

        <div className="flex items-center gap-6 text-sm text-white/70 mb-4">
          <div>
            <p className="text-xl font-semibold text-white">3+</p>
            <p>Years Experience</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">15+</p>
            <p>Projects Built</p>
          </div>
        </div>

        <a
          href="https://github.com/RezaPahlevi1"
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-sky-400 hover:underline"
        >
          View my GitHub →
        </a>

        {/* 
        <div className="flex gap-10 overflow-hidden h-40 items-center">
          <motion.div
            className="flex flex-col gap-6"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration,
              ease: "linear",
            }}
          >
            {[...leftIcons, ...leftIcons].map((IconComp, i) => (
              <div key={i} className="flex items-center gap-3">
                <IconItem
                  Icon={IconComp}
                  size={36}
                  className="text-[#61dafb]"
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-6"
            animate={{ y: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration,
              ease: "linear",
            }}
          >
            {[...rightIcons, ...rightIcons].map((IconComp, i) => (
              <div key={i} className="flex items-center gap-3">
                <IconItem
                  Icon={IconComp}
                  size={36}
                  className="text-yellow-400"
                />
              </div>
            ))}
          </motion.div>
        </div> */}
      </div>

      <div className="w-1/2">
        <div className="text-white flex flex-col gap-2 rounded-lg">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onClick={() => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-[#1A1A1D] text-white flex flex-col gap-2 p-8 border border-white/30 shadow-lg w-[700px] relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-white/60 hover:text-white text-2xl cursor-pointer"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt="project.jpg"
              className="w-full h-full object-cover border border-white/10"
            />

            <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>

            <div className="flex flex-row gap-2">
              {" "}
              {selectedProject.techStacks?.map((tech, i) => (
                <TechStacks
                  key={`${selectedProject.id}-tech-${i}`}
                  tech={tech}
                />
              ))}{" "}
            </div>

            <p className="text-white/70 leading-relaxed">
              {selectedProject.description}.
            </p>

            <div className="flex flex-row justify-between pt-4 text-sm font-medium text-white/80">
              <a
                target="_blank"
                href={selectedProject.github}
                className="hover:text-white transition"
              >
                Source
              </a>
              <a
                target="_blank"
                href={selectedProject.demo}
                className="hover:text-white transition"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
