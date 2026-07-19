export default function ATSScoreCard() {
  const score = 72; // Placeholder score

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col items-center justify-center text-center">
      <h3 className="text-lg font-bold text-gray-900 mb-6 w-full text-left">ATS Match Score</h3>
      
      <div className="relative w-40 h-40 mb-4">
        {/* SVG Circle Progress */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            className="text-gray-100 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          ></circle>
          <circle
            className="text-amber-500 stroke-current drop-shadow-md transition-all duration-1000 ease-out"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (251.2 * score) / 100}
          ></circle>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-black text-gray-900">{score}</span>
          <span className="text-xs text-gray-500 font-medium uppercase tracking-widest mt-1">Fair</span>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mt-2 max-w-[250px]">
        Your resume passes basic ATS filters but lacks several key keywords for a Senior position.
      </p>
    </div>
  );
}
