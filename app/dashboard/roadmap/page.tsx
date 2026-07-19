"use client";

import { useState } from 'react';
import { Map, CheckCircle2, Circle, Lock, Clock, BookOpen, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface RoadmapNode {
  id: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'locked';
  duration: string;
  skills: string[];
}

const phases: { name: string; nodes: RoadmapNode[] }[] = [
  {
    name: 'Phase 1 — Foundations',
    nodes: [
      { id: 1, title: 'React Fundamentals', description: 'Master core React concepts including hooks, state management, and component lifecycle.', status: 'completed', duration: '8 hours', skills: ['Hooks', 'JSX', 'Props'] },
      { id: 2, title: 'TypeScript Essentials', description: 'Learn TypeScript fundamentals including types, interfaces, generics, and utility types.', status: 'completed', duration: '6 hours', skills: ['Types', 'Interfaces', 'Generics'] },
    ],
  },
  {
    name: 'Phase 2 — Intermediate',
    nodes: [
      { id: 3, title: 'Advanced State Management', description: 'Explore Redux Toolkit, Zustand, and server state with React Query.', status: 'completed', duration: '10 hours', skills: ['Redux', 'Zustand', 'React Query'] },
      { id: 4, title: 'Frontend Architecture', description: 'Design scalable frontend architectures with module patterns and clean code principles.', status: 'in-progress', duration: '12 hours', skills: ['Architecture', 'Design Patterns', 'Clean Code'] },
    ],
  },
  {
    name: 'Phase 3 — Advanced',
    nodes: [
      { id: 5, title: 'Testing & CI/CD', description: 'Master unit, integration, and e2e testing. Set up CI/CD pipelines.', status: 'locked', duration: '10 hours', skills: ['Jest', 'Cypress', 'GitHub Actions'] },
      { id: 6, title: 'Performance Optimization', description: 'Profiling, code splitting, lazy loading, and Web Vitals optimization.', status: 'locked', duration: '8 hours', skills: ['Web Vitals', 'Profiling', 'Code Splitting'] },
    ],
  },
  {
    name: 'Phase 4 — Senior Level',
    nodes: [
      { id: 7, title: 'System Design for Frontend', description: 'Learn to design large-scale frontend systems, micro-frontends, and design systems.', status: 'locked', duration: '14 hours', skills: ['System Design', 'Micro-Frontends', 'Design Systems'] },
      { id: 8, title: 'Leadership & Mentoring', description: 'Develop technical leadership skills, code review practices, and mentoring abilities.', status: 'locked', duration: '6 hours', skills: ['Code Reviews', 'Mentoring', 'Tech Talks'] },
    ],
  },
];

export default function RoadmapPage() {
  const [expandedNodes, setExpandedNodes] = useState<number[]>([4]); // in-progress is expanded by default

  const toggleNode = (id: number) => {
    setExpandedNodes((prev) =>
      prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
    );
  };

  const completedCount = phases.flatMap((p) => p.nodes).filter((n) => n.status === 'completed').length;
  const totalCount = phases.flatMap((p) => p.nodes).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="py-6 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Learning Roadmap</h1>
          <p className="mt-1 text-sm text-gray-500">Your personalized path to becoming a Senior Frontend Engineer.</p>
        </div>

        {/* Progress Banner */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Map className="w-5 h-5 text-indigo-600 mr-2" />
              <h3 className="text-base font-bold text-gray-900">Overall Progress</h3>
            </div>
            <span className="text-sm font-bold text-indigo-600">{completedCount}/{totalCount} completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">{progressPercent}% complete — keep going!</p>
        </div>

        {/* Roadmap Timeline */}
        <div className="space-y-8">
          {phases.map((phase) => (
            <div key={phase.name}>
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center">
                <Sparkles className="w-4 h-4 mr-2 text-purple-400" /> {phase.name}
              </h2>

              <div className="space-y-0">
                {phase.nodes.map((node, idx) => {
                  const isExpanded = expandedNodes.includes(node.id);
                  return (
                    <div key={node.id} className="flex items-start">
                      {/* Timeline */}
                      <div className="flex flex-col items-center mr-4 flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 z-10 bg-white ${
                          node.status === 'completed' ? 'border-emerald-500 text-emerald-500' :
                          node.status === 'in-progress' ? 'border-indigo-600 bg-indigo-600 text-white shadow-[0_0_12px_rgba(79,70,229,0.3)]' :
                          'border-gray-200 text-gray-300'
                        }`}>
                          {node.status === 'completed' && <CheckCircle2 className="w-4 h-4" />}
                          {node.status === 'in-progress' && <Circle className="w-3 h-3 fill-current animate-pulse" />}
                          {node.status === 'locked' && <Lock className="w-3.5 h-3.5" />}
                        </div>
                        {idx !== phase.nodes.length - 1 && (
                          <div className={`w-0.5 h-full min-h-[3rem] ${
                            node.status === 'completed' ? 'bg-emerald-400' : 'bg-gray-200'
                          }`}></div>
                        )}
                      </div>

                      {/* Card */}
                      <button
                        onClick={() => toggleNode(node.id)}
                        className={`flex-1 mb-4 text-left rounded-2xl border p-4 transition-all ${
                          node.status === 'in-progress' ? 'border-indigo-200 bg-indigo-50/50 shadow-sm' :
                          node.status === 'locked' ? 'border-gray-200 bg-gray-50/50 opacity-60' :
                          'border-gray-200 bg-white shadow-sm hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className={`text-sm font-bold ${node.status === 'locked' ? 'text-gray-400' : 'text-gray-900'}`}>
                            {node.title}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400 flex items-center">
                              <Clock className="w-3 h-3 mr-1" /> {node.duration}
                            </span>
                            {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                          </div>
                        </div>
                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-sm text-gray-600 mb-3">{node.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {node.skills.map((skill) => (
                                <span key={skill} className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}