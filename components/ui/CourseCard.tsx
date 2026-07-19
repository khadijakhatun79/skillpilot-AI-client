import Link from 'next/link';
import { Star, Clock, BookOpen } from 'lucide-react';

interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  level?: string;
  duration: string;
  rating: number;
  image?: string;
}

export default function CourseCard({ id, title, category, level, duration, rating }: CourseCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
        {/* Placeholder image representation */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-90 group-hover:scale-105 transition-transform duration-500"></div>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-indigo-700 rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{title}</h3>
        <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-y-2 gap-x-4">
          <span className="flex items-center"><Clock className="w-4 h-4 mr-1.5" /> {duration}</span>
          {level && <span className="flex items-center"><BookOpen className="w-4 h-4 mr-1.5" /> {level}</span>}
          <span className="flex items-center text-amber-500"><Star className="w-4 h-4 mr-1.5 fill-current" /> {rating}</span>
        </div>
        <div className="mt-auto">
          <Link 
            href={`/courses/${id}`}
            className="block w-full py-3 px-4 bg-gray-50 text-indigo-600 text-center font-medium rounded-xl hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
