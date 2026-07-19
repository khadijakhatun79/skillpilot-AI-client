"use client";

import { useState } from 'react';
import { Briefcase, Target, TrendingUp, MessageSquare, ChevronRight, Sparkles, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

const careerInsights = [
  { title: 'Skill Gap Analysis', description: 'You\'re 72% aligned with Senior Frontend Engineer requirements. Focus on system design and testing.', icon: Target, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  { title: 'Market Demand', description: 'Senior Frontend Engineers are in high demand. Average salary: $145K-$185K in your region.', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { title: 'Interview Readiness', description: 'You\'ve covered 60% of common interview topics. Practice system design next.', icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
];

const actionPlan = [
  { step: 1, title: 'Complete Advanced React Patterns', status: 'completed', dueDate: 'Completed' },
  { step: 2, title: 'Master Frontend Architecture', status: 'in-progress', dueDate: 'In Progress' },
  { step: 3, title: 'Practice System Design Interviews', status: 'pending', dueDate: 'Starts Aug 1' },
  { step: 4, title: 'Build 2 Portfolio Projects', status: 'pending', dueDate: 'Starts Aug 15' },
  { step: 5, title: 'Apply to Target Companies', status: 'pending', dueDate: 'Starts Sep 1' },
];

const mockQuestions = [
  'Explain the difference between Server Components and Client Components in Next.js.',
  'How would you architect a large-scale React application?',
  'Describe your approach to performance optimization in a web application.',
];

export default function CareerCoachPage() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <div className="py-6 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">AI Career Coach</h1>
          <p className="mt-1 text-sm text-gray-500">Personalized career guidance powered by AI to help you reach your goals.</p>
        </div>

        {/* Goal Banner */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 overflow-hidden shadow-md mb-8">
          <div className="relative z-10">
            <div className="flex items-center mb-2">
              <Briefcase className="w-5 h-5 text-indigo-200 mr-2" />
              <span className="text-sm font-medium text-indigo-200">Your Career Target</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Senior Frontend Engineer</h2>
            <p className="text-indigo-100 max-w-xl text-sm md:text-base">
              Based on your skills and experience, you're on track to reach this goal. Keep pushing forward!
            </p>
            <div className="mt-4 flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                <span className="text-sm font-semibold text-white">72% Ready</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                <span className="text-sm font-semibold text-white">~3 months to go</span>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none">
            <Sparkles className="w-64 h-64 text-white absolute -right-12 -top-12 transform rotate-12" />
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {careerInsights.map((insight) => (
            <div key={insight.title} className={`bg-white rounded-2xl border ${insight.border} shadow-sm p-6`}>
              <div className={`${insight.bg} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                <insight.icon className={`w-6 h-6 ${insight.color}`} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{insight.title}</h3>
              <p className="text-sm text-gray-600">{insight.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Action Plan */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <Target className="w-5 h-5 text-indigo-600 mr-2" /> Career Action Plan
            </h3>
            <div className="space-y-4">
              {actionPlan.map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.status === 'completed' ? 'bg-emerald-100 text-emerald-600' :
                    item.status === 'in-progress' ? 'bg-indigo-100 text-indigo-600' :
                    'bg-gray-100 text-gray-400'
                  }`}>
                    {item.status === 'completed' ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <span className="text-sm font-bold">{item.step}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${item.status === 'completed' ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center mt-0.5">
                      <Clock className="w-3 h-3 mr-1" /> {item.dueDate}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Mock Interview Practice */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <MessageSquare className="w-5 h-5 text-purple-600 mr-2" /> Interview Practice
            </h3>
            <p className="text-sm text-gray-600 mb-4">Practice with AI-generated interview questions tailored to your target role.</p>
            <div className="space-y-3">
              {mockQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveQuestion(activeQuestion === idx ? null : idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    activeQuestion === idx
                      ? 'border-indigo-300 bg-indigo-50 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-sm font-medium text-gray-800 pr-4">{question}</p>
                    <ArrowRight className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-transform ${
                      activeQuestion === idx ? 'rotate-90 text-indigo-600' : 'text-gray-400'
                    }`} />
                  </div>
                  {activeQuestion === idx && (
                    <div className="mt-3 pt-3 border-t border-indigo-200">
                      <p className="text-xs text-gray-500">Click to start a practice session with your AI Coach in the Chat tab.</p>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
