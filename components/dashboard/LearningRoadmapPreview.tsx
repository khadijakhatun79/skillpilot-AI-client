import { Map } from 'lucide-react';

const roadmapNodes = [
  { id: 1, title: 'React Fundamentals', status: 'completed' },
  { id: 2, title: 'Advanced State Management', status: 'completed' },
  { id: 3, title: 'Frontend Architecture', status: 'in-progress' },
  { id: 4, title: 'Testing & CI/CD', status: 'locked' },
  { id: 5, title: 'Performance Optimization', status: 'locked' },
];

export default function LearningRoadmapPreview() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Senior Frontend Roadmap</h3>
        <Map className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-0">
        {roadmapNodes.map((node, idx) => (
          <div key={node.id} className="flex items-start">
            <div className="flex flex-col items-center mr-4">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 z-10 bg-white ${
                node.status === 'completed' ? 'border-emerald-500 text-emerald-500' :
                node.status === 'in-progress' ? 'border-indigo-600 bg-indigo-600 text-white shadow-[0_0_10px_rgba(79,70,229,0.3)]' :
                'border-gray-200'
              }`}>
                {node.status === 'completed' && <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>}
                {node.status === 'in-progress' && <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>}
              </div>
              
              {/* Connector Line */}
              {idx !== roadmapNodes.length - 1 && (
                <div className={`w-0.5 h-10 ${
                  node.status === 'completed' ? 'bg-emerald-500' : 'bg-gray-200'
                }`}></div>
              )}
            </div>
            <div className={`pt-0.5 ${node.status === 'locked' ? 'text-gray-400' : 'text-gray-900'}`}>
              <p className={`text-sm font-medium ${node.status === 'in-progress' ? 'text-indigo-600 font-bold' : ''}`}>
                {node.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
