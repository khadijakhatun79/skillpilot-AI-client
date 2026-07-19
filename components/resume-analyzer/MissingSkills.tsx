import { AlertCircle, Plus } from 'lucide-react';
import Link from 'next/link';

const missingSkills = [
  { name: 'GraphQL', priority: 'High', type: 'Technical' },
  { name: 'Next.js 14/15', priority: 'High', type: 'Technical' },
  { name: 'Team Leadership', priority: 'Medium', type: 'Soft Skill' },
  { name: 'CI/CD Pipelines', priority: 'Medium', type: 'Technical' },
];

export default function MissingSkills() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center mb-6">
        <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
        <h3 className="text-lg font-bold text-gray-900">Missing Skills</h3>
      </div>
      
      <div className="space-y-4">
        {missingSkills.map((skill, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
            <div>
              <p className="text-sm font-bold text-gray-900">{skill.name}</p>
              <div className="flex items-center mt-1 space-x-2">
                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                  skill.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {skill.priority} Priority
                </span>
                <span className="text-[10px] font-medium text-gray-500 uppercase">{skill.type}</span>
              </div>
            </div>
            
            <Link 
              href="/courses" 
              className="p-2 bg-white rounded-lg border border-gray-200 text-gray-500 hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-colors"
              title="Find Course"
            >
              <Plus className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
