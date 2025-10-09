import TechStacks from "./TechStacks";

function ProjectCard() {
  return (
    <div className="border border-white/20 p-3 flex flex-col cursor-pointer hover:border-white/70 transition">
      {/* Thumbnail */}
      <div className="relative w-full h-40 overflow-hidden rounded-md">
        <img
          src="https://res.cloudinary.com/hudha/image/upload/v1759909392/ChatGPT_Image_Oct_8_2025_03_42_58_PM_bt7pto.png"
          alt="project.jpg"
          className="w-full h-full object-cover border border-white/10"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col flex-grow mt-3 space-y-1 text-white">
        <h1 className="text-lg font-semibold">Project Name</h1>

        <div className="flex gap-2 flex-row">
          <TechStacks />
          <TechStacks />
        </div>

        <p className="text-sm text-white/70 line-clamp-2">
          Project Desc Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Project Desc Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Project Desc Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Footer */}
      <div className="flex flex-row justify-between pt-4 text-sm font-medium text-white/80">
        <p className="hover:text-white transition">Source</p>
        <p className="hover:text-white transition">Demo</p>
      </div>
    </div>
  );
}

export default ProjectCard;
