import { ArrowRight, Map } from "lucide-react";
import Link from "next/link";

interface NextCourseCardProps {
  course?: {
    title?: string;
    category?: string;
  };
}

export default function NextCourseCard({
  course,
}: NextCourseCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm sticky top-24">
      <div className="flex items-center mb-4 text-indigo-600">
        <Map className="w-5 h-5 mr-2" />
        <span className="text-sm font-bold uppercase tracking-wider">
          Up Next in Roadmap
        </span>
      </div>

      <div className="mb-4">
        <div className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-widest">
          Recommended Next
        </div>

        <h4 className="text-lg font-bold text-gray-900 leading-tight">
          {course?.title
            ? `Advanced Path After ${course.title}`
            : "Advanced Testing Strategies"}
        </h4>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Once you complete this course, continue your learning roadmap
        with advanced concepts and real-world projects.
      </p>

      <Link
        href="/courses/advanced-testing"
        className="flex items-center justify-center w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl font-semibold transition-colors text-sm border border-gray-200 group"
      >
        View Next Course

        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}