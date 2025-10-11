import RezaPahlevi from "../components/RezaPahlevi";
import Particles from "./Particles";
import RezaPorto from "../assets/reza-porto.png";

function MainSection() {
  return (
    <div className="relative bg-[#262a2a] text-white flex flex-col items-center h-130 justify-center overflow-hidden px-8 py-20">
      {/* BUNGKUS PARTICLES DALAM DIV ABSOLUTE */}
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

      {/* KONTEN */}
      <div className="absolute inset-0 flex flex-col p-20">
        <div className="mb-6">
          <RezaPahlevi />
        </div>

        <h1 className="text-5xl font-bold tracking-wide mb-4">Web Developer</h1>

        <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white/20 shadow-lg hover:scale-105 transition-all duration-300">
          <img
            src={RezaPorto}
            alt="Reza"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="max-w-2xl text-gray-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
          turpis at urna cursus egestas. Aliquam erat volutpat. Curabitur non
          tortor sed lorem placerat tincidunt in eget lacus.
        </p>
      </div>
    </div>
  );
}

export default MainSection;
