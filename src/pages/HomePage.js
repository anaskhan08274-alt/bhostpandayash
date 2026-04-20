import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#071521] text-white px-6 py-6">

      <div className="max-w-6xl mx-auto">

        {/* Navbar */}
        <div className="flex justify-between items-center border border-cyan-400/20 rounded-2xl px-6 py-3 bg-[#0b1c2b]/70 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-cyan-400 font-bold">
              <img
                src="pandaimg.jpeg"
                class="img-fluid rounded-top"
                alt=""
              />
              
            </div>
            <span className="font-semibold tracking-wide">
              GHOST PANDA
            </span>
          </div>

          <div className="border border-cyan-400/30 px-4 py-1 rounded-full text-sm text-cyan-300">
            Futuristic Resume Intelligence
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 mt-14 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              AI Resume <br /> Analyzer
            </h1>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-cyan-400 drop-shadow-[0_0_20px_#3ee8ff]">
              One Click Launch
            </h2>

            <p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
              Is landing page se ek button click me Ghost Panda Resume Analyzer
              open hoga. ATS score, keyword gaps, JD match, and resume optimization
              sab ek place pe.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8 flex-wrap">
              <Link
                to="/analyze"
                className="bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition shadow-[0_0_20px_#3ee8ff]"
              >
                Open Ghost Panda Analyzer
              </Link>

              <Link
                to="/analyze#workspaceSection"
                className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400/10 transition"
              >
                Go To Upload Section
              </Link>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Tip: button click karte hi analyzer same website par load ho jayega.
            </p>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-[#0b1c2b]/70 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-md shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Launch Panel
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Ready-to-open entry point for your resume analyzer project.
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div className="border border-cyan-400/20 rounded-xl p-4">
                <p className="text-xs text-gray-400">Mode</p>
                <h4 className="text-lg font-semibold">Live</h4>
              </div>

              <div className="border border-cyan-400/20 rounded-xl p-4">
                <p className="text-xs text-gray-400">Analyzer</p>
                <h4 className="text-lg font-semibold">Enabled</h4>
              </div>

              <div className="border border-cyan-400/20 rounded-xl p-4">
                <p className="text-xs text-gray-400">Route</p>
                <h4 className="text-lg font-semibold">/analyze</h4>
              </div>

              <div className="border border-cyan-400/20 rounded-xl p-4">
                <p className="text-xs text-gray-400">UX</p>
                <h4 className="text-lg font-semibold">1-Click</h4>
              </div>

            </div>
          </div>

        </div>

        {/* STEPS SECTION (Niche ke cards) */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {/* Step 1 */}
          <div className="border border-cyan-400/20 rounded-2xl p-6 bg-[#0b1c2b]/60 backdrop-blur-md">
            <h3 className="text-cyan-400 font-semibold mb-3">
              Step 1
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Landing page open karo aur <span className="text-white">"Open Ghost Panda Analyzer"</span> pe click karo.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border border-cyan-400/20 rounded-2xl p-6 bg-[#0b1c2b]/60 backdrop-blur-md">
            <h3 className="text-cyan-400 font-semibold mb-3">
              Step 2
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Resume upload karo ya text paste karo, job description add karo.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border border-cyan-400/20 rounded-2xl p-6 bg-[#0b1c2b]/60 backdrop-blur-md">
            <h3 className="text-cyan-400 font-semibold mb-3">
              Step 3
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Analyze pe click karo aur ATS/keyword report turant dekh lo.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}