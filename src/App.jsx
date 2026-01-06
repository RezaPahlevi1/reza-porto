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
import Weatherapp from "./assets/weather-app.png";
import Fastorder from "./assets/fastorder.png";

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
    {
      id: 5,
      name: "Weather-app",
      techStacks: ["React Vite", "TailwindCSS"],
      description:
        "A clean and responsive weather application built with React and Tailwind CSS, designed to provide quick and accurate weather information based on user-selected locations. This project serves as practical training for working with APIs, managing state in React, and building modern UI components.",
      image: Weatherapp,
      github: "https://github.com/RezaPahlevi1/weather-app",
      demo: "https://weather-p6llt4w3h-reza-pahlevis-projects-2e72e53c.vercel.app/",
      status: "completed",
    },
    {
      id: 6,
      name: "Fast-order",
      techStacks: ["React Vite", "TailwindCSS", "React Redux"],
      description:
        "This project is a web-based pizza ordering application built using React, React Router, and Redux to manage the ordering flow in a structured and scalable way. It allows users to browse the menu, add items to the cart, place orders, and track order status in real time, with a focus on clean architecture, predictable state management, and smooth client-side navigation.",
      image: Fastorder,
      github: "https://github.com/RezaPahlevi1/fast-order",
      demo: "https://fast-order-one.vercel.app/",
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
