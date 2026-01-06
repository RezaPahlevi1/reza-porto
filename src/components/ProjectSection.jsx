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
              className="relative flex max-h-[90vh] w-full max-w-[700px] flex-col overflow-hidden rounded-lg border border-white/30 bg-[#1A1A1D] p-6 text-white shadow-lg sm:p-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 z-10 text-2xl text-white/60 hover:text-white transition"
              >
                &times;
              </button>

              {/* Scrollable content */}
              <div className="flex flex-1 min-h-0 flex-col gap-3 overflow-y-auto pr-1">
                <img
                  src={selectedProject.image}
                  alt="project"
                  className="h-56 w-full rounded-md border border-white/10 object-cover sm:h-72"
                />

                <h2 className="mt-4 mb-2 text-xl font-bold sm:text-2xl">
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

                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  {selectedProject.description}
                </p>

                <div className="flex justify-between pt-4 text-sm font-medium text-white/80">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Source
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
