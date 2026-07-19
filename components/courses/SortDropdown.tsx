"use client";
import { ChevronDown } from 'lucide-react';

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="relative inline-block text-left w-full sm:w-auto">
      <div className="flex items-center space-x-2">
        <label htmlFor="sort" className="text-sm font-medium text-gray-700 whitespace-nowrap hidden sm:block">
          Sort by:
        </label>
        <div className="relative w-full sm:w-48">
          <select
            id="sort"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="block w-full pl-3 pr-10 py-2.5 sm:py-2 text-base border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-xl bg-white shadow-sm appearance-none border"
          >
            <option value="newest">Newest First</option>
            <option value="rating">Highest Rated</option>
            <option value="duration_low">Duration (Low to High)</option>
            <option value="duration_high">Duration (High to Low)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
