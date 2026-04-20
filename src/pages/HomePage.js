    import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061018] to-[#091f2f] text-[#eaf8ff] font-sans px-4 py-6">

      <div className="max-w-5xl mx-auto">

        {/* Navbar */}
        <nav className="flex justify-between items-center p-4 border border-cyan-200/30 rounded-xl bg-[#0a1622]/70 backdrop-blur-md">
          <div className="font-bold text-lg tracking-wide">
            GHOST PANDA
          </div>
          <div className="text-sm text-gray-300">
            Resume Intelligence
          </div>
        </nav>

        {/* Hero Section */}
        <section className="mt-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            AI Resume Analyzer
            <span className="block text-cyan-400 mt-2">
              One Click Launch
            </span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl leading-relaxed">
            A smart system that analyzes resumes, checks ATS score,
            finds keyword gaps, and matches job descriptions in seconds.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/analyze"
              className="px-6 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
            >
              Open Analyzer
            </Link>

            <Link
              to="/analyze#workspaceSection"
              className="px-6 py-3 rounded-lg border border-cyan-400 text-white hover:bg-cyan-400/10 transition"
            >
              Go To Upload Section
            </Link>
          </div>
        </section>

        {/* Card */}
        <section className="mt-10 p-6 border border-cyan-200/30 rounded-xl bg-[#0a1622]/60 backdrop-blur-md">
          <h3 className="text-lg font-semibold mb-2">
            Quick Note
          </h3>
          <p className="text-gray-400">
            Make sure the analyzer page exists and ID
            "workspaceSection" is present inside it.
          </p>
        </section>
      </div>
    </div>
  );
}