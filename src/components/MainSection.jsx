import RezaPahlevi from "../components/RezaPahlevi";
import Particles from "./Particles";
import RezaPorto from "../assets/reza-porto.png";
import RezaPorto2 from "../assets/Reza Pahlevi.jpg";

function MainSection() {
  return (
    <div
      id="about"
      className="relative bg-[#262a2a] text-white flex items-center justify-center min-h-screen overflow-hidden px-6 py-20"
    >
      {/* Background Particles */}
      <div className="absolute inset-0">
        <Particles
          particleColors={["#00bcd4", "#00bcd4"]}
          particleCount={150}
          particleSpread={10}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6 sm:gap-8 max-w-3xl">
        <div className="flex flex-col items-center gap-3">
          <RezaPahlevi />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
            Web Developer
          </h1>
        </div>

        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-lg hover:scale-105 transition-all duration-300">
          <img
            src={RezaPorto2}
            alt="Reza"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-gray-300 leading-relaxed text-justify text-sm sm:text-base max-w-xl">
          I’m a recent Computer Science graduate with a strong interest in
          full-stack development. My main focus is on building modern web
          applications using React, Vite, and Tailwind CSS. I’m currently
          broadening my expertise by exploring Next.js, Node.js, PostgreSQL, and
          MySQL to strengthen my backend and database knowledge. Beyond coding,
          I like to spend some of my downtime by playing games — keeping a good
          balance between work and relaxation.
        </p>
      </div>
    </div>
  );
}

export default MainSection;
