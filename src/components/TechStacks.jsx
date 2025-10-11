function TechStacks({ tech }) {
  const label =
    typeof tech === "string" ? tech : tech?.name || tech?.label || "Unknown";
  return (
    <div className="bg-[#262a2a] p-1.5 px-4 text-[12px] rounded-2xl">
      {label}
    </div>
  );
}

export default TechStacks;
