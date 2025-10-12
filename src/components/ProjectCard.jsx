import TechStacks from "./TechStacks";

function ProjectCard({ onClick, project }) {
  return (
    <div
      onClick={onClick}
      className="border border-white/20 p-3 flex flex-col rounded-lg cursor-pointer hover:border-white/70 transition"
    >
      <div className="relative w-full h-40 overflow-hidden rounded-md">
        <img
          src={project.image}
          alt="project.jpg"
          className="w-full h-full object-cover border transition-all duration-300 hover:scale-110 border-white/10"
        />
      </div>

      <div className="flex flex-col flex-grow mt-3 p-1 space-y-1 text-white">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-lg font-semibold">{project.name}</h1>
          <h1
            className={`text-xs sm:text-sm font-medium px-3 py-1 rounded-full capitalize
      ${
        project.status === "completed"
          ? "bg-green-500/20 text-green-400 border border-green-500/30"
          : "bg-red-500/20 text-red-400 border border-red-500/30"
      }`}
          >
            {project.status}
          </h1>
        </div>

        <p className="text-sm text-white/70 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap pt-2 gap-2">
          {project.techStacks?.map((tech, i) => (
            <TechStacks key={`${project.id}-tech-${i}`} tech={tech} />
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between pt-4 text-sm font-medium text-white/80">
        <a
          target="_blank"
          href={project.github}
          className="hover:text-white transition"
        >
          Source
        </a>
        <a
          target="_blank"
          href={project.demo}
          className="hover:text-white transition"
        >
          Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
