import { PlayCircle, Search, Compass, FileText } from 'lucide-react';
import Link from 'next/link';

const actions = [
  { title: 'Continue Learning', icon: PlayCircle, href: '/courses', color: 'text-indigo-600', bg: 'bg-indigo-50', hover: 'hover:bg-indigo-100' },
  { title: 'Explore Courses', icon: Search, href: '/courses', color: 'text-blue-600', bg: 'bg-blue-50', hover: 'hover:bg-blue-100' },
  { title: 'AI Career Coach', icon: Compass, href: '/dashboard/chat', color: 'text-purple-600', bg: 'bg-purple-50', hover: 'hover:bg-purple-100' },
  { title: 'Resume Analyzer', icon: FileText, href: '/dashboard/resume', color: 'text-emerald-600', bg: 'bg-emerald-50', hover: 'hover:bg-emerald-100' },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {actions.map((action, idx) => (
          <Link 
            key={idx} 
            href={action.href}
            className={`flex items-center p-3 rounded-xl transition-colors ${action.bg} ${action.hover}`}
          >
            <action.icon className={`w-5 h-5 mr-3 ${action.color}`} />
            <span className="text-sm font-semibold text-gray-800">{action.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
