import { useEffect, useState } from "react";

const ProgressRing = ({ score }) => {
  const [progress, setProgress] = useState(0);

  const radius = 80;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      if (current >= score) {
        current = score;
        clearInterval(interval);
      }
      setProgress(current);
    }, 15);

    return () => clearInterval(interval);
  }, [score]);

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-40 h-40 mx-auto mb-6">
      <svg height={radius * 2} width={radius * 2}>
        {/* Background */}
        <circle
          stroke="#374151"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress */}
        <circle
          stroke={score > 75 ? "#22c55e" : score > 50 ? "#facc15" : "#ef4444"}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ transition: "stroke-dashoffset 0.2s ease" }}
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold">
        {progress}%
      </div>
    </div>
  );
};

export default ProgressRing;