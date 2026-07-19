"use client";

import { useState } from 'react';
import { Settings, Edit3, Trash2, Eye, Search, BookOpen, Clock, Users, MoreHorizontal, PlusCircle, CheckCircle2, AlertCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  category: string;
  students: number;
  duration: string;
  status: 'published' | 'draft' | 'archived';
  lastUpdated: string;
}

const initialCourses: Course[] = [
  { id: '1', title: 'React Fundamentals Bootcamp', category: 'Frontend', students: 1240, duration: '8 hours', status: 'published', lastUpdated: '2 days ago' },
  { id: '2', title: 'Advanced TypeScript Patterns', category: 'Frontend', students: 856, duration: '6 hours', status: 'published', lastUpdated: '1 week ago' },
  { id: '3', title: 'Node.js API Development', category: 'Backend', students: 432, duration: '10 hours', status: 'draft', lastUpdated: '3 days ago' },
  { id: '4', title: 'Full-Stack Project: E-Commerce', category: 'Full-Stack', students: 678, duration: '14 hours', status: 'published', lastUpdated: '5 days ago' },
  { id: '5', title: 'CSS Architecture at Scale', category: 'Frontend', students: 0, duration: '4 hours', status: 'archived', lastUpdated: '1 month ago' },
];

const statusConfig = {
  published: { label: 'Published', icon: CheckCircle2, className: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  draft: { label: 'Draft', icon: AlertCircle, className: 'bg-amber-50 text-amber-700 border-amber-200' },
  archived: { label: 'Archived', icon: XCircle, className: 'bg-gray-100 text-gray-500 border-gray-200' },
};

export default function ManageCoursesPage() {
  const [courses, setCourses] = useState(initialCourses);
  const [search, setSearch] = useState('');
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
    setOpenMenu(null);
  };

  const stats = {
    total: courses.length,
    published: courses.filter((c) => c.status === 'published').length,
    totalStudents: courses.reduce((sum, c) => sum + c.students, 0),
  };

  return (
    <div className="py-6 min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Manage Courses</h1>
            <p className="mt-1 text-sm text-gray-500">View, edit, and organize your course catalog.</p>
          </div>
          <Link
            href="/dashboard/add-course"
            className="inline-flex items-center px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <PlusCircle className="w-4 h-4 mr-2" /> Add New Course
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex items-center gap-4">
            <div className="bg-indigo-100 w-10 h-10 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Total Courses</p>
              <p className="text-xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex items-center gap-4">
            <div className="bg-emerald-100 w-10 h-10 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Published</p>
              <p className="text-xl font-bold text-gray-900">{stats.published}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex items-center gap-4">
            <div className="bg-purple-100 w-10 h-10 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">Total Students</p>
              <p className="text-xl font-bold text-gray-900">{stats.totalStudents.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search courses by title or category..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
            />
          </div>
        </div>

        {/* Course Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/50">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Category</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Students</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Duration</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((course) => {
                  const status = statusConfig[course.status];
                  return (
                    <tr key={course.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-gray-900">{course.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5">Updated {course.lastUpdated}</p>
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <span className="text-sm text-gray-600">{course.category}</span>
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        <span className="text-sm text-gray-600 flex items-center">
                          <Users className="w-3.5 h-3.5 mr-1 text-gray-400" /> {course.students.toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <span className="text-sm text-gray-600 flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1 text-gray-400" /> {course.duration}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${status.className}`}>
                          <status.icon className="w-3 h-3 mr-1" /> {status.label}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="relative inline-block">
                          <button
                            onClick={() => setOpenMenu(openMenu === course.id ? null : course.id)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                          >
                            <MoreHorizontal className="w-4 h-4" />
                          </button>
                          {openMenu === course.id && (
                            <div className="absolute right-0 mt-1 w-36 bg-white rounded-xl border border-gray-200 shadow-lg py-1 z-20">
                              <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                <Eye className="w-4 h-4 mr-2 text-gray-400" /> View
                              </button>
                              <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                                <Edit3 className="w-4 h-4 mr-2 text-gray-400" /> Edit
                              </button>
                              <button
                                onClick={() => handleDelete(course.id)}
                                className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4 mr-2" /> Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center">
                      <Settings className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                      <p className="text-sm text-gray-500">No courses found matching your search.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}