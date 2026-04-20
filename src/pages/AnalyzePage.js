import { useState } from "react";

export default function AnalyzePage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) {
      alert("Please paste your resume");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://ghostpanda-backend.onrender.com/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ resumeText: text })
      });

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Error connecting to server");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col items-center p-6">
      
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-blue-400">
        GhostPanda Resume Analyzer 🐼
      </h1>

      {/* Input Box */}
      <textarea
        className="w-full max-w-2xl p-4 rounded-lg text-black focus:outline-none"
        rows={8}
        placeholder="Paste your resume here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Button */}
      <button
        onClick={handleAnalyze}
        className="mt-4 bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg transition"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {/* Result Section */}
      {result && (
        <div className="mt-8 w-full max-w-2xl bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">

          {/* Score */}
          <h2 className="text-2xl font-semibold mb-2">
            Score: {result.score}%
          </h2>

          {/* Color Indicator */}
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold ${
              result.color === "green"
                ? "bg-green-500"
                : result.color === "yellow"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          >
            {result.score}
          </div>

          {/* Skills */}
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Matched Skills:</h3>
            <p>
              {result.matchedSkills && result.matchedSkills.length > 0
                ? result.matchedSkills.join(", ")
                : "None"}
            </p>
          </div>

          <div className="mt-2">
            <h3 className="font-semibold text-lg">Missing Skills:</h3>
            <p>
              {result.missingSkills && result.missingSkills.length > 0
                ? result.missingSkills.join(", ")
                : "None"}
            </p>
          </div>

          {/* Suggestions */}
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Suggestions:</h3>
            <ul className="list-disc list-inside">
              {result.suggestions && result.suggestions.length > 0 ? (
                result.suggestions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))
              ) : (
                <li>No suggestions</li>
              )}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}