"use client";
import { Filter } from 'lucide-react';

interface FilterSidebarProps {
  categories: string[];
  levels: string[];
  selectedCategories: string[];
  selectedLevels: string[];
  onCategoryChange: (category: string) => void;
  onLevelChange: (level: string) => void;
}

export default function FilterSidebar({
  categories,
  levels,
  selectedCategories,
  selectedLevels,
  onCategoryChange,
  onLevelChange
}: FilterSidebarProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
      <div className="flex items-center mb-6">
        <Filter className="w-5 h-5 mr-2 text-gray-500" />
        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
      </div>

      <div className="mb-8">
        <h3 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wider">Category</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                id={`category-${category}`}
                name={`category-${category}`}
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => onCategoryChange(category)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer transition-colors"
              />
              <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-600 cursor-pointer select-none hover:text-gray-900">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wider">Level</h3>
        <div className="space-y-3">
          {levels.map((level) => (
            <div key={level} className="flex items-center">
              <input
                id={`level-${level}`}
                name={`level-${level}`}
                type="checkbox"
                checked={selectedLevels.includes(level)}
                onChange={() => onLevelChange(level)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded cursor-pointer transition-colors"
              />
              <label htmlFor={`level-${level}`} className="ml-3 text-sm text-gray-600 cursor-pointer select-none hover:text-gray-900">
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
