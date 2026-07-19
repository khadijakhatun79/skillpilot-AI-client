"use client";

import { useState } from 'react';
import { PlusCircle, Upload, Link as LinkIcon, BookOpen, Clock, Tag, FileText, DollarSign, CheckCircle2, AlertCircle } from 'lucide-react';

export default function AddCoursePage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('success');
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  return (
    <div className="py-6 min-h-[calc(100vh-4rem)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Add New Course</h1>
          <p className="mt-1 text-sm text-gray-500">Create a new course to share your expertise with learners.</p>
        </div>

        {/* Success / Error Banner */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center text-emerald-800">
            <CheckCircle2 className="w-5 h-5 mr-2 flex-shrink-0" />
            <p className="text-sm font-medium">Course created successfully! It's now visible on your Manage Courses page.</p>
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center text-red-800">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <p className="text-sm font-medium">Something went wrong. Please try again.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Course Info */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-indigo-600" /> Course Information
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
                <input
                  type="text"
                  placeholder="e.g., Advanced React Patterns"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Describe what students will learn in this course..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow resize-none"
                  required
                ></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center"><Tag className="w-4 h-4 mr-1.5 text-gray-400" /> Category</span>
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow bg-white">
                    <option>Frontend Development</option>
                    <option>Backend Development</option>
                    <option>Full-Stack</option>
                    <option>Data Science</option>
                    <option>DevOps</option>
                    <option>Mobile Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center"><FileText className="w-4 h-4 mr-1.5 text-gray-400" /> Difficulty</span>
                  </label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow bg-white">
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-indigo-600" /> Course Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5 text-gray-400" /> Duration</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 12 hours"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center"><DollarSign className="w-4 h-4 mr-1.5 text-gray-400" /> Price ($)</span>
                </label>
                <input
                  type="number"
                  placeholder="0 for free"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center"><LinkIcon className="w-4 h-4 mr-1.5 text-gray-400" /> Course URL</span>
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center"><Upload className="w-4 h-4 mr-1.5 text-gray-400" /> Thumbnail</span>
                </label>
                <div className="w-full px-4 py-6 rounded-xl border-2 border-dashed border-gray-300 text-center hover:border-indigo-400 transition-colors cursor-pointer">
                  <Upload className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                  <p className="text-xs text-gray-500">Click to upload or drag & drop</p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-all flex items-center shadow-md hover:shadow-lg"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              Create Course
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}