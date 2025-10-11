import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function FormSection() {
  return (
    <div className="py-10 px-10 md:px-16 lg:px-20 bg-[#262a2a] flex flex-col lg:flex-row justify-between gap-10">
      {/* Kiri - Sosial Media */}
      <div className="text-white text-3xl md:text-4xl flex flex-col gap-4 font-bold lg:w-1/2">
        <h1 className="pb-3 md:pb-5">Connect With Me.</h1>

        <a
          href="https://www.linkedin.com/in/reza-pahlevi-38366b227/"
          className="flex flex-row gap-4 items-center text-lg md:text-xl hover:text-white font-semibold cursor-pointer text-white/50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          Reza Pahlevi
        </a>

        <a
          href="https://www.instagram.com/reza_phv"
          className="flex flex-row gap-4 items-center text-lg md:text-xl hover:text-white font-semibold cursor-pointer text-white/50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
          reza_phv
        </a>

        <a
          href="https://github.com/RezaPahlevi1"
          className="flex flex-row gap-4 items-center text-lg md:text-xl hover:text-white font-semibold cursor-pointer text-white/50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          RezaPahlevi1
        </a>

        <a
          href="mailto:reza30pahlevi@gmail.com"
          className="flex flex-row gap-4 items-center text-lg md:text-xl hover:text-white font-semibold cursor-pointer text-white/50"
        >
          <MdEmail />
          reza30pahlevi@gmail.com
        </a>
      </div>

      {/* Kanan - Form */}
      <div className="flex flex-col gap-5 lg:px-5  lg:w-1/2">
        <h1 className="text-white text-3xl md:text-4xl font-bold">
          Send Me a Message.
        </h1>
        <form className="flex flex-col gap-5">
          <input
            className="bg-[#1A1A1D] text-white w-full p-3 border border-white/30 rounded-lg focus:border-sky-500 outline-none transition-all"
            placeholder="Your Name."
          />
          <input
            className="bg-[#1A1A1D] text-white w-full p-3 border border-white/30 rounded-lg focus:border-sky-500 outline-none transition-all"
            placeholder="Your Email."
          />
          <textarea
            className="bg-[#1A1A1D] text-white w-full p-3 border border-white/30 rounded-lg focus:border-sky-500 outline-none transition-all"
            placeholder="Your Message."
            rows="5"
          />
          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg w-fit transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormSection;
