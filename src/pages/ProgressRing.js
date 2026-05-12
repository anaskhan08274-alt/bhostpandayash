import { useEffect, useState } from "react";

const ProgressRing = ({ score = 0 }) => {
  const [progress, setProgress] = useState(0);

  const radius = 70;
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
    }, 20);

    return () => clearInterval(interval);
  }, [score]);

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-44 h-44">
      
      <svg
        height={radius * 2}
        width={radius * 2}
        className="-rotate-90"
      >
        {/* Background Circle */}
        <circle
          stroke="#1f2937"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress Circle */}
        <circle
          stroke={
            score >= 80
              ? "#22c55e"
              : score >= 60
              ? "#facc15"
              : "#ef4444"
          }
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            transition: "stroke-dashoffset 0.3s ease",
          }}
        />
      </svg>

      {/* Score Text */}
      <div className="absolute text-4xl font-bold text-white">
        {progress}%
      </div>
    </div>
  );
};

export default ProgressRing;