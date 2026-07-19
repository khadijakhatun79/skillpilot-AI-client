import { Sparkles, CheckCircle } from "lucide-react";

interface AILearningSummaryProps {
  course?: {
    title?: string;
    category?: string;
  };
}

export default function AILearningSummary({
  course,
}: AILearningSummaryProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100 shadow-sm mb-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
        <Sparkles className="w-24 h-24 text-indigo-600" />
      </div>

      <div className="flex items-center mb-4 relative z-10">
        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 shadow-inner">
          <Sparkles className="w-5 h-5 text-indigo-600" />
        </div>

        <h3 className="text-lg font-bold text-gray-900">
          AI Learning Summary
        </h3>
      </div>

      <p className="text-sm text-gray-600 mb-4 leading-relaxed relative z-10">
        Based on your current profile and career goal, this course{" "}
        {course?.title ? (
          <>
            <strong>{course.title}</strong>{" "}
          </>
        ) : (
          "content"
        )}
        is a{" "}
        <strong className="text-indigo-700">
          98% match
        </strong>
        .
      </p>

      <div className="space-y-3 relative z-10">
        <div className="flex items-start">
          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-xs text-gray-700 font-medium">
            Fills your gap in advanced state management.
          </span>
        </div>

        <div className="flex items-start">
          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-xs text-gray-700 font-medium">
            Covers performance optimization required for senior roles.
          </span>
        </div>
      </div>
    </div>
  );
}