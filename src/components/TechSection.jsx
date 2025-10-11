import {
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaJsSquare,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiNextdotjs,
  SiBootstrap,
  SiVite,
  SiSupabase,
  SiFramer,
  SiReact,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function TechSection() {
  const techs = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "React Vite", icon: <SiVite className="text-yellow-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    {
      name: "React Bits",
      icon: <TbBrandReactNative className="text-cyan-400" />,
    },
    { name: "Framer", icon: <SiFramer className="text-pink-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600" /> },
    { name: "MySQL", icon: <SiMysql className="text-orange-300" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
    { name: "Github", icon: <FaGithub className="text-white" /> },
  ];

  return (
    <div className="bg-[#1A1A1D] text-white py-10 px-10 lg:px-20 flex flex-col lg:flex-row gap-10 lg:gap-20">
      {/* BAGIAN KIRI */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-24 h-fit self-start">
        <div className="w-10 h-[2px] bg-sky-500 rounded-full mb-4"></div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 tracking-wide">
          Tools & Technologies.
        </h1>
        <p className="text-white/60 mb-6  leading-relaxed text-sm sm:text-base">
          A selection of tools & technologies that I work with to build modern
          and efficient web applications.
        </p>
      </div>

      {/* BAGIAN KANAN */}
      <div className="w-full lg:w-1/2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {techs.map((tech, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 bg-[#262a2a] p-4 sm:p-5 border rounded-lg border-white/20 hover:border-white/80 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl">{tech.icon}</div>
              <p className="text-xs sm:text-sm text-gray-300 font-medium">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechSection;
