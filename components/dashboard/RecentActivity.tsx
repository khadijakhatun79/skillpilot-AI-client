import { CheckCircle2, PlayCircle, Trophy } from 'lucide-react';

const activities = [
  { id: 1, title: 'Completed Module: Advanced State Management', time: '2 hours ago', icon: CheckCircle2, color: 'text-emerald-500' },
  { id: 2, title: 'Started Course: Frontend Architecture', time: 'Yesterday', icon: PlayCircle, color: 'text-blue-500' },
  { id: 3, title: 'Earned Certificate: React Basics', time: '3 days ago', icon: Trophy, color: 'text-amber-500' },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
      <div className="space-y-6">
        {activities.map((activity, idx) => (
          <div key={activity.id} className="flex relative">
            {/* Timeline line connecting items except the last one */}
            {idx !== activities.length - 1 && (
              <div className="absolute top-8 left-[11px] bottom-[-24px] w-0.5 bg-gray-100"></div>
            )}
            
            <div className="flex-shrink-0 mr-4 relative z-10 bg-white">
              <activity.icon className={`w-6 h-6 ${activity.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
