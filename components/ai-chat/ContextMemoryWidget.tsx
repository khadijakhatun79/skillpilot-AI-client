import { BrainCircuit } from 'lucide-react';

export default function ContextMemoryWidget() {
  return (
    <div className="hidden xl:block w-72 flex-shrink-0 border-l border-gray-200 bg-white h-full p-6 overflow-y-auto">
      <div className="flex items-center text-indigo-600 mb-6">
        <BrainCircuit className="w-5 h-5 mr-2" />
        <h3 className="text-sm font-bold uppercase tracking-wider">Context Memory</h3>
      </div>
      
      <p className="text-xs text-gray-500 mb-6 leading-relaxed">
        The AI uses this stored context to personalize your coaching experience.
      </p>

      <div className="space-y-4">
        <div>
          <h4 className="text-xs font-semibold text-gray-900 mb-1">Target Role</h4>
          <div className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg text-sm text-gray-700">
            Senior Frontend Engineer
          </div>
        </div>
        
        <div>
          <h4 className="text-xs font-semibold text-gray-900 mb-1">Current Focus</h4>
          <div className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg text-sm text-gray-700">
            Advanced React Patterns, Testing
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-gray-900 mb-1">Recent Achievement</h4>
          <div className="bg-gray-50 border border-gray-200 px-3 py-2 rounded-lg text-sm text-gray-700">
            Completed "State Management"
          </div>
        </div>
      </div>
    </div>
  );
}
