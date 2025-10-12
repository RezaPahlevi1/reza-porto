import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function Resume() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#1A1A1D]">
      <iframe
        src="/Cv Reza Pahlevi 2.pdf"
        title="Resume"
        className="w-[90%] h-[90%] border border-white/30 rounded-lg"
      ></iframe>
    </div>
  );
}

export default Resume;
