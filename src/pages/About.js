const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061018] to-[#091f2f] text-white">

      {/* Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          About GhostPanda 🐼
        </h1>
        <p className="text-gray-400 text-lg">
          AI-powered platform to analyze resumes and help you get hired faster.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* What is GhostPanda */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          <div>
            <h2 className="text-3xl font-bold mb-4 text-cyan-300">
              What is GhostPanda?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              GhostPanda is an AI-powered resume analysis platform designed to help
              job seekers improve their resumes and increase their chances of getting hired.
              Our platform analyzes resumes, checks ATS compatibility, identifies missing
              skills, and provides intelligent suggestions to make resumes more professional
              and job-ready.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">
              Platform Features
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>✔ Resume Analysis</li>
              <li>✔ ATS Score</li>
              <li>✔ AI Suggestions</li>
              <li>✔ Resume Builder</li>
            </ul>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="p-8 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-3 text-cyan-300">
              Our Mission
            </h2>
            <p className="text-gray-400">
              Our mission is to simplify the job application process by using AI
              to help candidates build stronger resumes and improve their chances
              of getting hired.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl hover:scale-105 transition">
            <h2 className="text-2xl font-semibold mb-3 text-cyan-300">
              Our Vision
            </h2>
            <p className="text-gray-400">
              Our vision is to build a complete AI-powered career platform where users can
              analyze resumes, build resumes, match jobs, track applications,
              and improve their profiles — all in one place.
            </p>
          </div>

        </div>

        {/* What We Offer */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-center">

            <div className="p-6 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:-translate-y-2 transition">
              <h3 className="font-semibold mb-2 text-cyan-300">
                AI Resume Analysis
              </h3>
              <p className="text-gray-400 text-sm">
                Analyze resumes using AI and improve quality.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:-translate-y-2 transition">
              <h3 className="font-semibold mb-2 text-cyan-300">
                ATS Score Checker
              </h3>
              <p className="text-gray-400 text-sm">
                Check ATS compatibility and resume score.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:-translate-y-2 transition">
              <h3 className="font-semibold mb-2 text-cyan-300">
                Resume Builder
              </h3>
              <p className="text-gray-400 text-sm">
                Build professional resumes easily.
              </p>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="p-8 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-cyan-300">10K+</h2>
            <p className="text-gray-400">Resumes Analyzed</p>
          </div>

          <div className="p-8 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-cyan-300">5K+</h2>
            <p className="text-gray-400">Users</p>
          </div>

          <div className="p-8 rounded-xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-cyan-300">95%</h2>
            <p className="text-gray-400">Success Rate</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;