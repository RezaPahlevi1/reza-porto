import { useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import ProjectSection from "./components/ProjectSection";
import TechSection from "./components/TechSection";
import FormSection from "./components/FormSection";
import authImage from "./assets/auth-management.png";
import Splitlicious from "./assets/splitlicious.png";
import EducationSection from "./components/EducationSection";
import Bpakm from "./assets/bpakm.png";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const projects = [
    {
      id: 1,
      name: "Auth Management System",
      techStacks: ["React Vite", "TailwindCSS", "Typescript", "PostgreSQL"],
      description:
        "A role-based authentication system where Users manage personal data, while Admins perform CRUD operations and view all registered accounts",
      image: authImage,
      github: "https://github.com/RezaPahlevi1/client-auth-system",
      demo: "https://client-side-system.vercel.app/",
      status: "completed",
    },
    {
      id: 2,
      name: "Splitlicious",
      techStacks: ["React Vite", "TailwindCSS", "Javascript"],
      description:
        "A simple split bill web app that lets you add friends and quickly calculate shared expenses",
      image: Splitlicious,
      github: "https://github.com/RezaPahlevi1/splitlicious",
      demo: "https://splitlicious.vercel.app/",
      status: "completed",
    },
    {
      id: 3,
      name: "Mini Learning Management System",
      techStacks: ["React Vite", "TailwindCSS", "Javascript", "Figma"],
      description:
        "A mini learning management system that provides an interactive platform for managing courses, instructors, and learning materials. It allows users to explore various courses, view instructor profiles, and access structured learning content, offering a simplified yet effective experience of a modern LMS",
      image: "",
      github: "https://github.com/RezaPahlevi1/lms-course",
      demo: "#",
      status: "ongoing",
    },
    {
      id: 4,
      name: "BPAKM UII",
      techStacks: ["Wordpress", "Figma"],
      description:
        "A paid group project developed in collaboration with BPA KM UII (Badan Pengelola Aset KM UII), an organization that manages and develops UII’s institutional assets. The project involved building a WordPress-based website to support BPA’s digital presence and operational needs, aligning with their mission to enhance institutional governance and promote organizational independence through effective information and asset management",
      image: Bpakm,
      github: "#",
      demo: "https://bpakm.uii.ac.id/",
      status: "completed",
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
