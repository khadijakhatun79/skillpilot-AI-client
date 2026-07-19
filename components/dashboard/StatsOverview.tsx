import { BookOpen, Target, Award, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Active Courses', value: '3', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-100' },
  { label: 'Overall Progress', value: '68%', icon: Target, color: 'text-emerald-600', bg: 'bg-emerald-100' },
  { label: 'Certificates', value: '12', icon: Award, color: 'text-amber-600', bg: 'bg-amber-100' },
  { label: 'AI Suggestions', value: '4', icon: Sparkles, color: 'text-purple-600', bg: 'bg-purple-100' },
];

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <div className={`${stat.bg} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
