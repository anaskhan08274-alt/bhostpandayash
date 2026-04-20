import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadResume = () => {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const generateDummyData = () => {
    const score = Math.floor(Math.random() * 30) + 65;

    const allSkills = [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "MongoDB",
      "TypeScript",
    ];

    const shuffled = [...allSkills].sort(() => 0.5 - Math.random());

    return {
      id: Date.now(),
      score,
      skills: shuffled.slice(0, 4),
      missingSkills: shuffled.slice(4),
      suggestions: [
        "Add action verbs like 'developed', 'built'",
        "Include measurable achievements",
        "Improve ATS keywords",
        "Add more technical skills",
      ],
    };
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleUpload = () => {
    if (!fileName) {
      alert("Please upload a resume first");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const data = generateDummyData();
      setLoading(false);
      navigate("/result", { state: data });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061018] to-[#091f2f] flex items-center justify-center px-4 relative overflow-hidden text-white">

      {/* Glow Effects */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      {loading ? (
        <div className="text-center z-10">
          <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>

          <h2 className="text-3xl font-semibold text-cyan-300">
            Analyzing Resume...
          </h2>

          <p className="text-gray-400 mt-2">
            AI is generating insights ⚡
          </p>
        </div>
      ) : (
        <div className="z-10 w-full max-w-xl p-10 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,255,0.1)] text-center">

          <h1 className="text-4xl font-bold mb-2">
            Upload Resume
          </h1>

          <p className="text-gray-400 mb-8">
            Get instant AI-powered analysis 🚀
          </p>

          {/* Upload Box */}
          <label className="block border border-cyan-400/30 rounded-xl p-12 cursor-pointer hover:border-cyan-400 transition">

            <input type="file" className="hidden" onChange={handleFileChange} />

            <div className="text-5xl mb-4">📄</div>

            <p className="text-gray-300">
              Drag & Drop your resume
            </p>

            <p className="text-sm text-gray-500 mt-1">
              or click to browse
            </p>
          </label>

          {/* File Name */}
          {fileName && (
            <p className="mt-4 text-cyan-400 text-sm">
              ✅ {fileName}
            </p>
          )}

          {/* Button */}
          <button
            onClick={handleUpload}
            className="mt-8 w-full py-3 rounded-xl bg-cyan-400 text-black font-semibold text-lg hover:bg-cyan-300 transition shadow-[0_0_20px_rgba(0,255,255,0.4)]"
          >
            Analyze Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadResume;