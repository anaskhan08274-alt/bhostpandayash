import { Link, useLocation } from "react-router-dom";
import ProgressRing from "./ProgressRing";


const Result = () => {
  const { state } = useLocation();
  const data = state || {};
  const score = Number(data.score ?? 0);
  const keywordScore = Number(data.keywordScore ?? 0);
  const formatScore = Number(data.formatScore ?? 0);
  const contentScore = Number(data.contentScore ?? 0);
console.log("SCORE:", score);
  const skills = data.skills || data.matchedSkills || [];
  const missingSkills = data.missingSkills || [];
  const suggestions = data.suggestions || [];
  const sectionFeedback = data.sectionFeedback || {};

  const getScoreColor = (s) => {
    if (s >= 80) return "text-green-400";
    if (s >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreBarColor = (s) => {
    if (s >= 80) return "bg-green-400";
    if (s >= 60) return "bg-yellow-400";
    return "bg-red-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061018] to-[#091f2f] text-white px-6 py-10 relative overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full bottom-[-150px] right-[-150px]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Resume Analysis
              <span className="block text-cyan-400 mt-2">
                AI Insights Report
              </span>
            </h1>
            {data.analysisDate && (
              <p className="text-gray-500 text-sm mt-2">
                Analyzed on {new Date(data.analysisDate).toLocaleString()}
              </p>
            )}
          </div>
          <div className="flex gap-3">
            <Link
              to="/analyze"
              className="px-5 py-2.5 rounded-xl bg-cyan-400 text-black font-semibold hover:opacity-90 transition text-sm"
            >
              New Analysis
            </Link>
          </div>
        </div>

        {/* User & Job Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#0a1622]/60 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
              👤 Candidate Info
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-gray-500">Name:</span> {data.name || data.userName || "Anonymous"}</p>
              <p><span className="text-gray-500">Email:</span> {data.email || data.userEmail || "Not provided"}</p>
              {data.fileName && (
                <p><span className="text-gray-500">Resume:</span> {data.fileName}</p>
              )}
            </div>
          </div>
          <div className="bg-[#0a1622]/60 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur">
            <h3 className="text-cyan-400 font-semibold mb-4 flex items-center gap-2">
              💼 Target Position
            </h3>
            <div className="space-y-2 text-gray-300">
              <p><span className="text-gray-500">Job Title:</span> {data.jobTitle || "Not specified"}</p>
              <p><span className="text-gray-500">Experience Level:</span> {data.experience || "Not specified"}</p>
              <p><span className="text-gray-500">JD Skills Found:</span> {data.jdSkillsCount || 0}</p>
            </div>
          </div>
        </div>

        {/* Overall Score */}
        <div className="bg-[#0a1622]/70 border border-cyan-400/20 rounded-2xl p-8 text-center mb-10 backdrop-blur">
          <h2 className="text-gray-300 mb-4 text-lg">
            Overall ATS Compatibility Score
          </h2>

         <div className="flex justify-center items-center mb-6">
  <ProgressRing score={score} />
</div>
          <p className={`text-lg font-medium ${getScoreColor(score)}`}>
            {score >= 80
              ? "🌟 Excellent! Your resume is highly optimized for this role."
              : score >= 60
              ? "👍 Good start! A few optimizations will strengthen your resume."
              : "⚠️ Needs Work. Follow the suggestions below to improve your score."}
          </p>
        </div>

        {/* Score Breakdown */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#0a1622]/60 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur text-center">
            <h3 className="text-gray-400 text-sm mb-2">Keyword Match</h3>
            <p className={`text-3xl font-bold ${getScoreColor(keywordScore)}`}>{keywordScore}%</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div className={`${getScoreBarColor(keywordScore)} h-2 rounded-full transition-all`} style={{ width: `${keywordScore}%` }} />
            </div>
          </div>
          <div className="bg-[#0a1622]/60 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur text-center">
            <h3 className="text-gray-400 text-sm mb-2">Format & Structure</h3>
            <p className={`text-3xl font-bold ${getScoreColor(formatScore)}`}>{formatScore}%</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div className={`${getScoreBarColor(formatScore)} h-2 rounded-full transition-all`} style={{ width: `${formatScore}%` }} />
            </div>
          </div>
          <div className="bg-[#0a1622]/60 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur text-center">
            <h3 className="text-gray-400 text-sm mb-2">Content Quality</h3>
            <p className={`text-3xl font-bold ${getScoreColor(contentScore)}`}>{contentScore}%</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
              <div className={`${getScoreBarColor(contentScore)} h-2 rounded-full transition-all`} style={{ width: `${contentScore}%` }} />
            </div>
          </div>
        </div>

        {/* Section Feedback */}
        {Object.keys(sectionFeedback).length > 0 && (
          <div className="bg-[#0a1622]/60 border border-purple-400/20 rounded-2xl p-6 mb-10 backdrop-blur">
            <h2 className="text-purple-400 text-lg font-semibold mb-5">
              📋 Section-by-Section Feedback
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {Object.entries(sectionFeedback).map(([section, feedback], i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl p-4">
                  <span className="text-purple-400 mt-0.5">▸</span>
                  <div>
                    <p className="text-white font-medium capitalize">{section}</p>
                    <p className="text-gray-400 text-sm">{feedback}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#0a1622]/60 border border-green-400/20 rounded-2xl p-6 backdrop-blur">
            <h2 className="text-green-400 text-lg font-semibold mb-5">
              ✅ Matched Skills ({skills.length})
            </h2>
            {skills.length > 0 ? (
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
            ) : (
              <p className="text-gray-500">No matching skills found. Consider adding relevant skills from the job description.</p>
            )}
          </div>

          <div className="bg-[#0a1622]/60 border border-red-400/20 rounded-2xl p-6 backdrop-blur">
            <h2 className="text-red-400 text-lg font-semibold mb-5">
              ⚠ Missing Skills ({missingSkills.length})
            </h2>
            {missingSkills.length > 0 ? (
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
            ) : (
              <p className="text-gray-500">Great job! No critical missing skills detected.</p>
            )}
          </div>
        </div>

        {/* Suggestions */}
        <div className="bg-[#0a1622]/70 border border-yellow-400/20 rounded-2xl p-6 mb-10 backdrop-blur">
          <h2 className="text-yellow-400 text-lg font-semibold mb-6">
            💡 Personalized Suggestions
          </h2>
          <ul className="space-y-4 text-gray-300">
            {suggestions.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-yellow-400 font-semibold mt-0.5">
                  {i + 1}.
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/analyze"
            className="px-8 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:opacity-90 transition"
          >
            Analyze Another Resume
          </Link>
          <Link
            to="/"
            className="px-8 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;

