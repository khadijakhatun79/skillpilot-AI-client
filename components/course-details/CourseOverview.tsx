import { CheckCircle2 } from "lucide-react";

interface CourseOverviewProps {
  course: {
    description?: string;
    learningOutcomes?: string[];
  };
}

const defaultLearningOutcomes = [
  "Build complex, scalable applications from scratch.",
  "Understand advanced architectural patterns and best practices.",
  "Deploy your applications to modern cloud infrastructure.",
  "Optimize performance and ensure robust security.",
  "Write clean, maintainable, and testable code.",
  "Integrate seamlessly with third-party APIs and services.",
];

export default function CourseOverview({
  course,
}: CourseOverviewProps) {
  const learningOutcomes =
    course.learningOutcomes?.length
      ? course.learningOutcomes
      : defaultLearningOutcomes;

  return (
    <section className="py-12 border-b border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Course Overview
      </h2>

      <div className="prose prose-indigo max-w-none text-gray-600 mb-10 leading-relaxed">
        <p>
          {course.description ||
            "In this comprehensive course, you will learn everything from the fundamentals to advanced concepts through real-world projects and hands-on practice."}
        </p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          What you'll learn
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          {learningOutcomes.map((outcome, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{outcome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}