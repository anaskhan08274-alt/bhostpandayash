import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("https://ghostpanda-backend.onrender.com", {
        method: "POST",
        headers: {
          "x-api-key": "sk_ghostpanda_DIN0022"
        },
        body: formData
      });

      const data = await res.json();
      console.log(data);

      // alert("Score: " + data.score);

      navigate("/result", { state: data });

    } catch (error) {
      console.error(error);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061018] to-[#091f2f] flex items-center justify-center px-4 relative overflow-hidden text-white">

      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full bottom-[-150px] right-[-150px]" />

      <div className="z-10 w-full max-w-xl p-10 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,255,0.15)] text-center">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-2">
          Upload Resume
        </h1>

        <p className="text-gray-400 mb-8">
          Get instant AI-powered analysis 🚀
        </p>

        {/* Upload Box */}
        <label className="block border border-cyan-400/30 rounded-xl p-12 cursor-pointer hover:border-cyan-400 transition">

          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="text-5xl mb-4">📄</div>

          <p className="text-gray-300">
            Drag & Drop your resume
          </p>

          <p className="text-sm text-gray-500 mt-1">
            or click to browse
          </p>
        </label>

        {/* File Name */}
        {file && (
          <p className="mt-4 text-cyan-400 text-sm">
            ✅ {file.name}
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleAnalyze}
          className="mt-8 w-full py-3 rounded-xl bg-cyan-400 text-black font-semibold text-lg hover:bg-cyan-300 transition shadow-[0_0_25px_rgba(0,255,255,0.5)]"
        >
          Analyze Resume
        </button>
      </div>
    </div>
  );
}