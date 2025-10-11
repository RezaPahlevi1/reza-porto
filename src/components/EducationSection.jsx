function EducationSection() {
  return (
    <div className="bg-[#1A1A1D] text-white py-10 p-20 flex flex-row">
      {/* Kiri - Detail Waktu & GPA */}
      <div className="w-1/2 sticky h-fit self-start top-25">
        <div className="w-10 h-[2px] bg-sky-500 rounded-full mb-4"></div>
        <h1 className="text-3xl font-bold mb-2 tracking-wide">Education.</h1>
        <p className="text-white/60 mb-6 w-3/4 leading-relaxed text-sm">
          September 2020 — May 2025
        </p>

        <div className="flex flex-col gap-2 text-white/80 text-sm">
          <p>🎓 Bachelor of Informatics</p>
          <p>🏛️ Universitas Islam Indonesia, Yogyakarta</p>
          <p>
            📊 GPA: <span className="text-sky-400 font-semibold">3.82</span>
          </p>
        </div>
      </div>

      {/* Kanan - Deskripsi */}
      <div className="w-1/2 flex flex-col justify-center">
        <div className="bg-[#262a2a] p-8 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 shadow-md hover:shadow-lg">
          <p className="text-gray-300 leading-relaxed text-sm">
            I graduated from{" "}
            <span className="text-white font-medium">
              Universitas Islam Indonesia
            </span>{" "}
            majoring in{" "}
            <span className="text-white font-medium">Informatics</span>. During
            my study, I’ve developed strong foundations in web programming,
            designing, and technologies.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed text-sm">
            With over{" "}
            <span className="text-sky-400 font-semibold">2 years</span> of
            experience in web development through{" "}
            <span className="text-white font-medium">contract projects</span>,
            <span className="text-white font-medium"> academic works</span>, and
            <span className="text-white font-medium"> self-learning</span>, I’ve
            honed my skills in building responsive, efficient, and modern web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
