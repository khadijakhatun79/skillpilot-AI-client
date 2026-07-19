import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const recommendations = [
  { id: '1', title: 'Advanced Testing Strategies', reason: 'Fills a gap in your senior frontend goal.', duration: '6 hours' },
  { id: '2', title: 'System Design for Frontend', reason: 'Highly requested skill for your target role.', duration: '12 hours' },
];

export default function AIRecommendations() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
        <Sparkles className="w-24 h-24 text-purple-600" />
      </div>
      
      <div className="flex items-center mb-6 relative z-10">
        <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
        <h3 className="text-lg font-bold text-gray-900">AI Suggestions</h3>
      </div>
      
      <div className="space-y-4 relative z-10">
        {recommendations.map((rec) => (
          <div key={rec.id} className="bg-purple-50 rounded-xl p-4 border border-purple-100">
            <h4 className="text-sm font-bold text-gray-900 mb-1">{rec.title}</h4>
            <p className="text-xs text-gray-600 mb-3">{rec.reason}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-md">{rec.duration}</span>
              <Link href={`/courses/${rec.id}`} className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center transition-colors">
                View <ArrowRight className="w-3 h-3 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
