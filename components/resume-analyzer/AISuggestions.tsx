import { Sparkles, CheckCircle2 } from 'lucide-react';

const suggestions = [
  {
    title: 'Quantify your achievements',
    desc: 'Instead of "Improved app performance", try "Reduced initial load time by 45% using React.lazy and code splitting."',
  },
  {
    title: 'Update your summary',
    desc: 'Your summary focuses too much on junior responsibilities. Highlight architectural decisions and mentoring experience.',
  },
  {
    title: 'Reorder experience',
    desc: 'Move your "Frontend Developer" role above your "Web Intern" role to emphasize your most recent impact.',
  }
];

export default function AISuggestions() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 lg:col-span-2">
      <div className="flex items-center mb-6">
        <Sparkles className="w-5 h-5 text-indigo-600 mr-2" />
        <h3 className="text-lg font-bold text-gray-900">AI Actionable Feedback</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {suggestions.map((sugg, idx) => (
          <div key={idx} className="bg-gradient-to-b from-indigo-50/50 to-white border border-indigo-100 rounded-xl p-5 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-5">
              <CheckCircle2 className="w-20 h-20 text-indigo-600" />
            </div>
            <h4 className="text-sm font-bold text-indigo-900 mb-2 relative z-10">{sugg.title}</h4>
            <p className="text-sm text-gray-600 relative z-10 leading-relaxed">{sugg.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
