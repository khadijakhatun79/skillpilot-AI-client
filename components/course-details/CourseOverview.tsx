import { CheckCircle2 } from 'lucide-react';

const learningOutcomes = [
  "Build complex, scalable applications from scratch.",
  "Understand advanced architectural patterns and best practices.",
  "Deploy your applications to modern cloud infrastructure.",
  "Optimize performance and ensure robust security.",
  "Write clean, maintainable, and testable code.",
  "Integrate seamlessly with third-party APIs and services."
];

export default function CourseOverview() {
  return (
    <section className="py-12 border-b border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h2>
      <div className="prose prose-indigo max-w-none text-gray-600 mb-10 leading-relaxed">
        <p className="mb-4">
          In this comprehensive course, you will dive deep into the modern ecosystem. We start with the absolute basics, ensuring a solid foundation before moving into advanced topics. You'll not only learn the syntax and features, but also the "why" and "how" behind industry best practices.
        </p>
        <p>
          By the end of this journey, you'll have built several production-ready projects that you can proudly showcase in your portfolio. Our AI-driven feedback system will guide you through complex assignments, ensuring you understand every concept thoroughly.
        </p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
        <h3 className="text-xl font-bold text-gray-900 mb-6">What you'll learn</h3>
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
