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

export default function ProjectSection() {
  const leftIcons = [FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython];
  const rightIcons = [FaNodeJs, FaPython, FaJs, FaReact, FaHtml5];
  const duration = 8; // durasi loop (detik)
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="flex flex-row text-white py-10 p-20 bg-[#1A1A1D] gap-8">
      {/* KIRI */}
      <div className="w-1/2 flex flex-col sticky h-fit self-start top-25">
        {/* Section Title */}
        <h1 className="text-4xl font-bold mb-2 text-white">
          Featured Projects
        </h1>
        <p className="text-white/60 mb-8 w-3/4 leading-relaxed text-sm">
          A selection of my website projects
        </p>

        {/* Sub Section: Tech Stack */}
        <h2 className="text-2xl font-semibold mb-3 text-white">Tech Stacks</h2>
        <p className="text-white/60 mb-6 text-sm w-3/4 leading-relaxed">
          Beberapa tools & framework utama yang gua pakai dalam membangun
          aplikasi web:
        </p>

        {/* Scrolling icons */}
        <div className="flex gap-10 overflow-hidden h-40 items-center">
          {/* kiri - scroll ke atas */}
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
                <p className="text-sm text-white/70">Tech {i + 1}</p>
              </div>
            ))}
          </motion.div>

          {/* kanan - scroll ke bawah */}
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
                <p className="text-sm text-white/70">Tool {i + 1}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* KANAN */}
      <div className="w-1/2">
        <div className="text-white flex flex-col gap-2 rounded-lg">
          <ProjectCard onClick={() => setSelectedProject("Project 1")} />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-[#1A1A1D] text-white p-8 border border-white/30 shadow-lg w-[500px] relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-4 text-white/60 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProject}</h2>
            <p className="text-white/70 leading-relaxed">
              Ini adalah deskripsi lengkap dari {selectedProject}. Kamu bisa isi
              dengan detail project, teknologi yang digunakan, dan link ke demo
              atau repo.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
