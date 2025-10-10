import RezaPahlevi from "./RezaPahlevi";

function Navbar() {
  return (
    <div className="flex flex-row justify-between px-20 p-5 bg-[#1A1A1D]/70 sticky top-0 z-50 text-white backdrop-blur-md">
      <RezaPahlevi />
      <div className="flex flex-row gap-10">
        <h1>About Me</h1>
        <h1>Tech Stacks</h1>
        <h1>Projects</h1>
        <h1>Resume</h1>
      </div>
    </div>
  );
}

export default Navbar;
