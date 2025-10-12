import React, { useEffect, useRef, useState } from "react";
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
import { motion, AnimatePresence, useInView } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ProjectSection({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.1, // 30% bagian card masuk viewport baru trigger animasi
  });
  useEffect(() => {
    Aos.init({ duration: 200, once: true }); // durasi animasi 0.8 detik
  }, []);
  return (
    <div
      id="projects"
      className="flex flex-col lg:flex-row text-white py-10 px-10 lg:p-20 bg-[#1A1A1D] gap-8"
    >
      {/* LEFT SECTION */}
      <div className="lg:w-1/2 w-full flex flex-col lg:sticky lg:top-24 h-fit self-start">
        <div className="w-10 h-[2px] bg-sky-500 rounded-full mb-4"></div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
          Featured Projects
        </h1>
        <p className="text-white/60 mb-8 lg:w-3/4 leading-relaxed text-sm sm:text-base">
          A selection of my website projects
        </p>

        <div className="flex items-center justify-between sm:justify-start sm:gap-10 text-sm text-white/70 mb-4 flex-wrap gap-y-4">
          <div>
            <p className="text-xl font-semibold text-white">2+</p>
            <p>Years Experience</p>
          </div>
          <div>
            <p className="text-xl font-semibold text-white">10+</p>
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
      </div>

      <div className="lg:w-1/2 w-full">
        <div className="text-white flex flex-col gap-4 rounded-xs">
          {projects.map((p) => {
            return (
              <ProjectCard project={p} onClick={() => setSelectedProject(p)} />
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-[#1A1A1D] text-white flex flex-col gap-3 p-6 sm:p-8 border border-white/30 shadow-lg w-full max-w-[700px] relative rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-white/60 hover:text-white text-2xl cursor-pointer"
              >
                &times;
              </button>

              <img
                src={selectedProject.image}
                alt="project.jpg"
                className="w-full h-56 sm:h-72 object-cover border border-white/10 rounded-md"
              />

              <h2 className="text-xl sm:text-2xl font-bold mt-4 mb-2">
                {selectedProject.name}
              </h2>

              <div className="flex flex-wrap gap-2">
                {selectedProject.techStacks?.map((tech, i) => (
                  <TechStacks
                    key={`${selectedProject.id}-tech-${i}`}
                    tech={tech}
                  />
                ))}
              </div>

              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
