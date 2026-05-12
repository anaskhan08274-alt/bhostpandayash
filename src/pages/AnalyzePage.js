import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    jobTitle: "",
    experience: "Mid-Level",
    jobDescription: ""
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a resume file");
      return;
    }
    if (!formData.jobDescription.trim()) {
      alert("Please enter a job description for accurate analysis");
      return;
    }
    setLoading(true);

    const data = new FormData();
    data.append("file", file);
    data.append("userName", formData.userName);
    data.append("userEmail", formData.userEmail);
    data.append("jobTitle", formData.jobTitle);
    data.append("experience", formData.experience);
    data.append("jobDescription", formData.jobDescription);
    
     console.log([...data.entries()]);
     console.log("RESULT PAGE DATA:", data);    

    try {
      const res = await fetch(
        "https://ghostpanda-backend.onrender.com/upload",
        {
          method: "POST",
          headers: {
            "x-api-key": "sk_ghostpanda_DIN0022"
          },
          body: data
        }
      );

      const result = await res.json();
      console.log("API RESPONSE:", result);

     if (result.score !== undefined) {
  navigate("/result", {
    state: {
      score: result.score,
      keywordScore: result.keywordScore,
      formatScore: result.formatScore,
      contentScore: result.contentScore,
      skills: result.skills,
      missingSkills: result.missingSkills,
      suggestions: result.suggestions,

      name: formData.userName,
      email: formData.userEmail,
      jobTitle: formData.jobTitle,
      experience: formData.experience
    }
  });
}
       else {
        alert("Analysis failed: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error(error);
      alert("Error connecting to analysis server. Please ensure the backend is running on port 5000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061018] to-[#091f2f] flex items-center justify-center px-4 py-10 relative overflow-hidden text-white">

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full bottom-[-150px] right-[-150px]" />

      <div className="z-10 w-full max-w-2xl p-8 md:p-10 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,255,0.15)]">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Resume Analyzer
          </h1>
          <p className="text-gray-400">
            Fill in your details and upload your resume for AI-powered analysis 🚀
          </p>
        </div>

        {/* User Info Section */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Full Name *</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0a1622]/70 border border-cyan-400/20 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email Address *</label>
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0a1622]/70 border border-cyan-400/20 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition"
              required
            />
          </div>
        </div>

        {/* Job Info Section */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Target Job Title *</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder="Senior Software Engineer"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0a1622]/70 border border-cyan-400/20 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Experience Level</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0a1622]/70 border border-cyan-400/20 text-white focus:border-cyan-400 focus:outline-none transition"
            >
              <option value="Entry-Level">Entry-Level (0-2 years)</option>
              <option value="Mid-Level">Mid-Level (3-5 years)</option>
              <option value="Senior">Senior (6-10 years)</option>
              <option value="Lead/Principal">Lead / Principal (10+ years)</option>
            </select>
          </div>
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-1">Job Description *</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleInputChange}
            placeholder="Paste the full job description here. Our AI will compare it against your resume to find skill gaps and optimization opportunities."
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-[#0a1622]/70 border border-cyan-400/20 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition resize-none"
            required
          />
        </div>

        {/* Upload Box */}
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2">Upload Resume *</label>
          <label className="block border-2 border-dashed border-cyan-400/30 rounded-xl p-8 cursor-pointer hover:border-cyan-400 hover:bg-cyan-400/5 transition text-center">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
            />
            <div className="text-4xl mb-3">📄</div>
            <p className="text-gray-300 font-medium">
              {file ? file.name : "Drag & Drop your resume or click to browse"}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Supports PDF, DOC, DOCX, TXT
            </p>
          </label>
        </div>

        {/* Button */}
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-cyan-400 text-black font-semibold text-lg hover:bg-cyan-300 transition shadow-[0_0_25px_rgba(0,255,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <span className="animate-spin">⏳</span>
              Analyzing Resume...
            </>
          ) : (
            "Analyze Resume"
          )}
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Your data is processed securely. We do not store your resume after analysis.
        </p>
      </div>
    </div>
  );
}

