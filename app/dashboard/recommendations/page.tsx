"use client";

import { useState } from 'react';
import { Star, Sparkles, Clock, BarChart3, BookOpen, ArrowRight, Filter, TrendingUp } from 'lucide-react';
import Link from 'next/link';

type Category = 'all' | 'skill-gap' | 'trending' | 'career-aligned';

const allRecommendations = [
  { id: '1', title: 'Advanced Testing Strategies', reason: 'Fills a gap in your senior frontend goal.', duration: '6 hours', difficulty: 'Intermediate', match: 94, category: 'skill-gap' as const },
  { id: '2', title: 'System Design for Frontend', reason: 'Highly requested skill for your target role.', duration: '12 hours', difficulty: 'Advanced', match: 92, category: 'career-aligned' as const },
  { id: '3', title: 'GraphQL Mastery', reason: 'Trending skill among senior frontend engineers.', duration: '8 hours', difficulty: 'Intermediate', match: 87, category: 'trending' as const },
  { id: '4', title: 'Micro-Frontend Architecture', reason: 'Growing demand — aligns with your system design goals.', duration: '10 hours', difficulty: 'Advanced', match: 85, category: 'career-aligned' as const },
  { id: '5', title: 'Web Performance Optimization', reason: 'Critical gap — required for senior-level interviews.', duration: '7 hours', difficulty: 'Intermediate', match: 90, category: 'skill-gap' as const },
  { id: '6', title: 'AI-Powered Web Apps', reason: 'Trending topic in the industry right now.', duration: '5 hours', difficulty: 'Beginner', match: 78, category: 'trending' as const },
];

const categories: { key: Category; label: string; icon: typeof Star }[] = [
  { key: 'all', label: 'All', icon: Sparkles },
  { key: 'skill-gap', label: 'Skill Gaps', icon: BarChart3 },
  { key: 'trending', label: 'Trending', icon: TrendingUp },
  { key: 'career-aligned', label: 'Career Match', icon: Star },
];

export default function RecommendationsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered = activeCategory === 'all'
    ? allRecommendations
    : allRecommendations.filter((r) => r.category === activeCategory);

  return (
    <div className="py-6 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">AI Recommendations</h1>
          <p className="mt-1 text-sm text-gray-500">Personalized course suggestions based on your skills, goals, and industry trends.</p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <Filter className="w-4 h-4 text-gray-400 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                activeCategory === cat.key
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <cat.icon className="w-3.5 h-3.5" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((rec) => (
            <div key={rec.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
              {/* Match Percentage Header */}
              <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600" style={{ width: `${rec.match}%` }}></div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{rec.title}</h3>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md flex-shrink-0 ml-2">
                    {rec.match}% match
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{rec.reason}</p>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> {rec.duration}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <BookOpen className="w-3 h-3 mr-1" /> {rec.difficulty}
                  </span>
                </div>

                <Link
                  href={`/courses/${rec.id}`}
                  className="w-full flex items-center justify-center px-4 py-2.5 rounded-xl bg-indigo-50 text-indigo-700 text-sm font-semibold hover:bg-indigo-100 transition-colors"
                >
                  View Course <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}