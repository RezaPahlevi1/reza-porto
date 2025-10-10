import { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import ProjectSection from "./components/ProjectSection";
import TechSection from "./components/TechSection";
import FormSection from "./components/FormSection";

function App() {
  return (
    <>
      <div className="bg-[#1A1A1D]">
        <Navbar />
        <MainSection />
        <ProjectSection />
        {/* <TechSection /> */}
        <FormSection />
      </div>
    </>
  );
}

export default App;
