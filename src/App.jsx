import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import ProjectSection from "./components/ProjectSection";

const projectData = [{ id: 1, name: "Project" }];

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <ProjectSection />
    </>
  );
}

export default App;
