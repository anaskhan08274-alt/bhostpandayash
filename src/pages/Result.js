import { Link, useLocation } from "react-router-dom";
import ProgressRing from "./ProgressRing";

const Result = () => {
  const { state } = useLocation();

  const data = state || {
    score: 0,
    skills: [],
    missingSkills: [],
    suggestions: [],
  };

  const { score, skills, missingSkills, suggestions } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061018] to-[#091f2f] text-white px-6 py-10 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full bottom-[-150px] right-[-150px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          Resume Analysis
          <span className="block text-cyan-400 mt-2">
            AI Insights Report
          </span>
        </h1>

        {/* Score Section */}
        <div className="bg-[#0a1622]/70 border border-cyan-400/20 rounded-2xl p-8 text-center mb-12 backdrop-blur">

          <h2 className="text-gray-300 mb-6 text-lg">
            ATS Score
          </h2>

          <div className="flex justify-center mb-6">
            <ProgressRing score={score} />
          </div>

          <p className="text-gray-400 text-lg">
            {score > 70
              ? "Your resume is performing well 👍"
              : "Your resume needs improvement ⚠️"}
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          {/* Skills Found */}
          <div className="bg-[#0a1622]/60 border border-green-400/20 rounded-2xl p-6 backdrop-blur">

            <h2 className="text-green-400 text-lg font-semibold mb-5">
              ✅ Skills Found
            </h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full bg-green-400/10 text-green-300 border border-green-400/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Missing Skills */}
          <div className="bg-[#0a1622]/60 border border-red-400/20 rounded-2xl p-6 backdrop-blur">

            <h2 className="text-red-400 text-lg font-semibold mb-5">
              ⚠ Missing Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {missingSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-1.5 rounded-full bg-red-400/10 text-red-300 border border-red-400/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Suggestions */}
        <div className="bg-[#0a1622]/70 border border-yellow-400/20 rounded-2xl p-6 mb-12 backdrop-blur">

          <h2 className="text-yellow-400 text-lg font-semibold mb-6">
            💡 Suggestions
          </h2>

          <ul className="space-y-4 text-gray-300">
            {(suggestions || []).slice(0, 5).map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-yellow-400 font-semibold">
                  {i + 1}.
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          <Link
            to="/upload"
            className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:opacity-90 transition"
          >
            Re-Upload Resume
          </Link>

          <Link
            to="/resume-builder"
            className="px-6 py-3 rounded-xl border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10 transition"
          >
            Improve Resume
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Result;