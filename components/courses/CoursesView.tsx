"use client";

import { useState, useEffect, useMemo } from 'react';
import SearchBar from './SearchBar';
import FilterSidebar from './FilterSidebar';
import SortDropdown from './SortDropdown';
import CourseCard from '@/components/ui/CourseCard';
import CourseSkeleton from './CourseSkeleton';
import EmptyState from './EmptyState';
import Pagination from './Pagination';
import { Filter, X } from 'lucide-react';

// Mock Data
const MOCK_COURSES = [
  { id: '1', title: 'Machine Learning Fundamentals', category: 'Data Science', level: 'Beginner', duration: '8 Weeks', durationWeeks: 8, rating: 4.8 },
  { id: '2', title: 'Advanced React Patterns', category: 'Web Development', level: 'Advanced', duration: '6 Weeks', durationWeeks: 6, rating: 4.9 },
  { id: '3', title: 'Cloud Architecture with AWS', category: 'Cloud Computing', level: 'Intermediate', duration: '10 Weeks', durationWeeks: 10, rating: 4.7 },
  { id: '4', title: 'UI/UX Design Systems', category: 'Design', level: 'Beginner', duration: '4 Weeks', durationWeeks: 4, rating: 4.9 },
  { id: '5', title: 'Introduction to Python', category: 'Data Science', level: 'Beginner', duration: '4 Weeks', durationWeeks: 4, rating: 4.6 },
  { id: '6', title: 'Fullstack Next.js', category: 'Web Development', level: 'Intermediate', duration: '12 Weeks', durationWeeks: 12, rating: 4.8 },
  { id: '7', title: 'Kubernetes Mastery', category: 'DevOps', level: 'Advanced', duration: '8 Weeks', durationWeeks: 8, rating: 4.9 },
  { id: '8', title: 'Cybersecurity Basics', category: 'Security', level: 'Beginner', duration: '6 Weeks', durationWeeks: 6, rating: 4.5 },
  { id: '9', title: 'Data Structures in C++', category: 'Computer Science', level: 'Intermediate', duration: '10 Weeks', durationWeeks: 10, rating: 4.4 },
  { id: '10', title: 'Figma for UI Designers', category: 'Design', level: 'Intermediate', duration: '5 Weeks', durationWeeks: 5, rating: 4.8 },
  { id: '11', title: 'Docker for Beginners', category: 'DevOps', level: 'Beginner', duration: '3 Weeks', durationWeeks: 3, rating: 4.7 },
  { id: '12', title: 'Deep Learning with PyTorch', category: 'Data Science', level: 'Advanced', duration: '12 Weeks', durationWeeks: 12, rating: 4.9 },
];

const CATEGORIES = Array.from(new Set(MOCK_COURSES.map(c => c.category))).sort();
const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];
const ITEMS_PER_PAGE = 8;

export default function CoursesView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest'); 
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Simulate network request
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategories, selectedLevels, sortBy, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevels(prev => 
      prev.includes(level) ? prev.filter(l => l !== level) : [...prev, level]
    );
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedLevels([]);
    setCurrentPage(1);
  };

  const filteredAndSortedCourses = useMemo(() => {
    let result = MOCK_COURSES;

    if (searchQuery) {
      result = result.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (selectedCategories.length > 0) {
      result = result.filter(c => selectedCategories.includes(c.category));
    }

    if (selectedLevels.length > 0) {
      result = result.filter(c => selectedLevels.includes(c.level));
    }

    result = [...result].sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'duration_low') return a.durationWeeks - b.durationWeeks;
      if (sortBy === 'duration_high') return b.durationWeeks - a.durationWeeks;
      return parseInt(b.id) - parseInt(a.id); // newest default
    });

    return result;
  }, [searchQuery, selectedCategories, selectedLevels, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedCourses.length / ITEMS_PER_PAGE);
  const paginatedCourses = filteredAndSortedCourses.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Explore Courses</h1>
          <p className="mt-2 text-lg text-gray-600">Find the perfect course to accelerate your career.</p>
        </div>
        <div className="w-full md:w-auto">
          <SortDropdown value={sortBy} onChange={(val) => { setSortBy(val); setCurrentPage(1); }} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Search and Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between mb-4 gap-4">
          <SearchBar value={searchQuery} onChange={(v) => { setSearchQuery(v); setCurrentPage(1); }} />
          <button 
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="p-3 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isMobileFilterOpen ? <X className="h-5 w-5" /> : <Filter className="h-5 w-5" />}
          </button>
        </div>

        {/* Sidebar */}
        <aside className={`lg:w-1/4 ${isMobileFilterOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="hidden lg:block mb-6">
            <SearchBar value={searchQuery} onChange={(v) => { setSearchQuery(v); setCurrentPage(1); }} />
          </div>
          <FilterSidebar 
            categories={CATEGORIES}
            levels={LEVELS}
            selectedCategories={selectedCategories}
            selectedLevels={selectedLevels}
            onCategoryChange={handleCategoryChange}
            onLevelChange={handleLevelChange}
          />
        </aside>

        {/* Main Content Area */}
        <main className="lg:w-3/4">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => <CourseSkeleton key={i} />)}
            </div>
          ) : filteredAndSortedCourses.length === 0 ? (
            <EmptyState onClear={clearFilters} />
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {paginatedCourses.map(course => (
                  <CourseCard key={course.id} {...course} />
                ))}
              </div>
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
