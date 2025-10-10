import { FaLinkedin } from "react-icons/fa";

function FormSection() {
  return (
    <div className="py-10 p-20 bg-[#262a2a] flex flex-row justify-between">
      <div className="text-white text-4xl flex flex-col gap-5 font-bold w-1/2">
        <h1>Connect With Me.</h1>
        <span className="flex flex-row gap-5 text-center items-center text-2xl hover:text-white font-semibold  cursor-pointer text-white/50">
          <FaLinkedin />
          Linkein
        </span>
        <span className="flex flex-row gap-5 text-center items-center text-2xl font-semibold cursor-pointer  text-white/50">
          <FaLinkedin />
          Linkein
        </span>
        <span className="flex flex-row gap-5 text-center items-center text-2xl font-semibold cursor-pointer  text-white/50">
          <FaLinkedin />
          Linkein
        </span>
      </div>
      <div className="flex flex-col gap-5 w-1/2 pl-3">
        <h1 className="text-white text-4xl font-bold">Send Me a Message.</h1>
        <form className="flex flex-col gap-5">
          <input
            className="bg-[#1a1a1d] text-white w-3/4 p-3 border border-white/40"
            placeholder="Your Name."
          />
          <input
            className="bg-[#1a1a1d] text-white w-3/4 p-3 border border-white/40"
            placeholder="Your Email."
          />
          <textarea
            className="bg-[#1a1a1d] text-white w-3/4 p-3 border border-white/40"
            text="area"
            placeholder="Your Message."
          />
        </form>
      </div>
    </div>
  );
}

export default FormSection;
