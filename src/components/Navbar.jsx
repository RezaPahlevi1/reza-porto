import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import RezaPahlevi from "../components/RezaPahlevi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // tutup menu setelah klik di mobile
    }
  };

  return (
    <div className="flex justify-between items-center px-6 sm:px-20 py-5 bg-[#1A1A1D]/70 sticky top-0 z-50 text-white backdrop-blur-md">
      <RezaPahlevi />

      {/* Hamburger untuk mobile */}
      <button className="sm:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Items */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row absolute sm:static top-full left-0 w-full sm:w-auto bg-[#1A1A1D]/90 sm:bg-transparent 
        sm:backdrop-blur-none backdrop-blur-md sm:gap-10 gap-4 p-6 sm:p-0`}
      >
        {["about", "projects", "techstacks", "education"].map((item) => (
          <h1
            key={item}
            onClick={() => scrollToSection(item)}
            className="cursor-pointer text-lg hover:text-sky-400 transition-colors duration-200"
          >
            {item.charAt(0).toUpperCase() +
              item.slice(1).replace(/([A-Z])/g, " $1")}
          </h1>
        ))}
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-lg hover:text-sky-400 transition-colors duration-200"
          type="application/pdf"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
