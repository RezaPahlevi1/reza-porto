import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function FormSection() {
  return (
    <div className="py-10 p-20 bg-[#262a2a] flex flex-row justify-between">
      {/* <div className="w-10 h-[2px] bg-sky-500 rounded-full mb-4"></div> */}
      <div className="text-white text-4xl flex flex-col gap-2 font-bold w-1/2">
        <h1 className="pb-5">Connect With Me.</h1>
        <a
          href="https://www.linkedin.com/in/reza-pahlevi-38366b227/"
          className="flex flex-row gap-5 text-center items-center text-xl hover:text-white font-semibold  cursor-pointer text-white/50"
          target="_blank"
        >
          <FaLinkedin />
          Reza Pahlevi
        </a>
        <a
          href="https://www.instagram.com/reza_phv"
          className="flex flex-row gap-5 text-center items-center text-xl hover:text-white font-semibold cursor-pointer  text-white/50"
          target="_blank"
        >
          <FaInstagram />
          reza_phv
        </a>
        <a
          href="https://github.com/RezaPahlevi1"
          className="flex flex-row gap-5 text-center items-center text-xl hover:text-white font-semibold cursor-pointer  text-white/50"
          target="_blank"
        >
          <FaGithub />
          RezaPahlevi1
        </a>
        <a
          href="#"
          className="flex flex-row gap-5 text-center items-center text-xl hover:text-white font-semibold cursor-pointer  text-white/50"
          target="_blank"
        >
          <MdEmail />
          reza30pahlevi@gmail.com
        </a>
      </div>
      <div className="flex flex-col gap-5 w-1/2 pl-3">
        <h1 className="text-white text-4xl font-bold">Send Me a Message.</h1>
        <form className="flex flex-col gap-5">
          <input
            className="bg-[#1A1A1D] text-white w-3/4 p-3 border border-white/40"
            placeholder="Your Name."
          />
          <input
            className="bg-[#1A1A1D] text-white w-3/4 p-3 border border-white/40"
            placeholder="Your Email."
          />
          <textarea
            className="bg-[#1A1A1D] text-white w-3/4 p-3 border border-white/40"
            text="area"
            placeholder="Your Message."
          />
        </form>
      </div>
    </div>
  );
}

export default FormSection;
