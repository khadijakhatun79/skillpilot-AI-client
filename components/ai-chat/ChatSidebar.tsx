import { MessageSquare, Plus, Search } from 'lucide-react';

const history = [
  { group: 'Today', items: ['Reviewing my senior roadmap', 'Next.js 14 server components'] },
  { group: 'Previous 7 Days', items: ['ATS resume suggestions', 'Preparing for a frontend interview'] },
];

export default function ChatSidebar() {
  return (
    <div className="w-64 flex-shrink-0 border-r border-gray-200 bg-gray-50 h-full hidden lg:flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <button className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-xl py-2 px-4 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
          <Plus className="w-4 h-4" />
          <span>New Chat</span>
        </button>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search history..." 
            className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-6">
        {history.map((group, idx) => (
          <div key={idx}>
            <h4 className="text-xs font-semibold text-gray-500 mb-2 px-1 uppercase tracking-wider">{group.group}</h4>
            <div className="space-y-1">
              {group.items.map((item, iIdx) => (
                <button key={iIdx} className="w-full flex items-center space-x-3 px-2 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded-lg transition-colors text-left group">
                  <MessageSquare className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 flex-shrink-0" />
                  <span className="truncate">{item}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
