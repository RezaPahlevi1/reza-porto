import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import ProjectSection from "./components/ProjectSection";
import TechSection from "./components/TechSection";
import FormSection from "./components/FormSection";
import authImage from "./assets/auth-management.png";
import EducationSection from "./components/EducationSection";

function App() {
  const projects = [
    {
      id: 1,
      name: "Auth Management System",
      techStacks: ["React Vite", "TailwindCSS", "Typescript", "PostgreSQL"],
      description:
        "A role-based authentication system where Users manage personal data, while Admins perform CRUD operations and view all registered accounts.",
      image: authImage,
      github: "https://github.com/RezaPahlevi1/client-auth-system",
      demo: "https://client-side-system.vercel.app/",
    },
    {
      id: 2,
      name: "Splitlicious",
      techStacks: ["React Vite", "TailwindCSS", "Javascript"],
      description:
        "A simple split bill web app that lets you add friends and quickly calculate shared expenses",
      image: "",
      github: "https://github.com/RezaPahlevi1/splitlicious",
      demo: "",
    },
    {
      id: 3,
      name: "",
      techStacks: ["", "", ""],
      description: "",
      image: "",
      github: "",
      demo: "",
    },
  ];
  return (
    <>
      <div className="bg-[#1A1A1D]">
        <Navbar />
        <MainSection />
        <ProjectSection projects={projects} />
        <TechSection />
        <EducationSection />
        <FormSection />
      </div>
    </>
  );
}

export default App;
