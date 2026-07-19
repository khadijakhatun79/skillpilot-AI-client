"use client";
import { useState } from 'react';
import { ChevronDown, PlayCircle, FileText, Lock } from 'lucide-react';

const curriculum = [
  {
    title: "Module 1: Introduction & Setup",
    lessons: 4,
    duration: "45m",
    items: [
      { type: "video", title: "Course Overview", duration: "5:00", free: true },
      { type: "video", title: "Environment Setup", duration: "15:00", free: true },
      { type: "reading", title: "Required Tools Checklist", duration: "10:00", free: false },
      { type: "video", title: "Your First Application", duration: "15:00", free: false },
    ]
  },
  {
    title: "Module 2: Core Concepts",
    lessons: 6,
    duration: "2h 15m",
    items: [
      { type: "video", title: "Understanding the Architecture", duration: "20:00", free: false },
      { type: "video", title: "State Management Basics", duration: "25:00", free: false },
      { type: "reading", title: "Component Lifecycle", duration: "15:00", free: false },
      { type: "video", title: "Data Fetching Strategies", duration: "30:00", free: false },
      { type: "video", title: "Routing Fundamentals", duration: "25:00", free: false },
      { type: "reading", title: "Module 2 Quiz", duration: "20:00", free: false },
    ]
  },
  {
    title: "Module 3: Advanced Patterns",
    lessons: 5,
    duration: "3h 30m",
    items: [
      { type: "video", title: "Performance Optimization", duration: "45:00", free: false },
      { type: "video", title: "Authentication & Security", duration: "50:00", free: false },
      { type: "video", title: "State Management Advanced", duration: "40:00", free: false },
      { type: "reading", title: "Testing Methodologies", duration: "30:00", free: false },
      { type: "video", title: "Deployment Pipeline", duration: "45:00", free: false },
    ]
  }
];

export default function CourseCurriculum() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <section className="py-12 border-b border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Curriculum</h2>
      <p className="text-gray-500 mb-8">3 Modules • 15 Lessons • 6h 30m total length</p>
      
      <div className="space-y-4">
        {curriculum.map((mod, index) => {
          const isOpen = openModule === index;
          return (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <button
                className="w-full px-6 py-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none"
                onClick={() => setOpenModule(isOpen ? null : index)}
              >
                <div className="flex flex-col items-start">
                  <span className="font-bold text-gray-900 text-left">{mod.title}</span>
                  <span className="text-sm text-gray-500 mt-1">{mod.lessons} lessons • {mod.duration}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isOpen && (
                <div className="border-t border-gray-200 divide-y divide-gray-100">
                  {mod.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        {item.type === 'video' ? (
                          <PlayCircle className={`w-5 h-5 mr-3 ${item.free ? 'text-indigo-600' : 'text-gray-400'}`} />
                        ) : (
                          <FileText className={`w-5 h-5 mr-3 ${item.free ? 'text-indigo-600' : 'text-gray-400'}`} />
                        )}
                        <span className={`text-sm font-medium ${item.free ? 'text-indigo-600 cursor-pointer hover:underline' : 'text-gray-700'}`}>
                          {item.title}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        {item.free ? (
                          <span className="mr-4 text-xs font-bold text-indigo-600 uppercase tracking-wider hidden sm:inline-block">Preview</span>
                        ) : null}
                        <span className="mr-3">{item.duration}</span>
                        {!item.free && <Lock className="w-4 h-4 text-gray-400" />}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
