import { Star, Clock, BookOpen, Users, PlayCircle } from 'lucide-react';
import Link from 'next/link';

interface CourseHeroProps {
  title: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  students: string;
}

export default function CourseHero({ title, category, level, duration, rating, students }: CourseHeroProps) {
  return (
    <div className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-500 opacity-20 blur-3xl mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-500 opacity-20 blur-3xl mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/3">
            <nav className="flex text-sm text-slate-400 mb-6 font-medium">
              <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
              <span className="mx-2">/</span>
              <span className="text-indigo-400">{category}</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">{title}</h1>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl leading-relaxed">
              Master the fundamentals and advanced concepts. This comprehensive program is designed to take you from {level.toLowerCase()} to job-ready with hands-on projects and AI-guided feedback.
            </p>
            
            <div className="flex flex-wrap gap-y-4 gap-x-8 text-sm text-slate-300 mb-8">
              <div className="flex items-center"><Star className="w-5 h-5 text-amber-400 mr-2 fill-current" /> {rating} ({students} reviews)</div>
              <div className="flex items-center"><Clock className="w-5 h-5 mr-2 text-indigo-400" /> {duration}</div>
              <div className="flex items-center"><BookOpen className="w-5 h-5 mr-2 text-indigo-400" /> {level}</div>
              <div className="flex items-center"><Users className="w-5 h-5 mr-2 text-indigo-400" /> {students} enrolled</div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-indigo-600/30">
                Enroll Now
              </button>
              <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-colors border border-slate-700 flex items-center">
                <PlayCircle className="w-5 h-5 mr-2" /> Watch Preview
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/3 w-full max-w-md">
            <div className="aspect-video bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl relative overflow-hidden group cursor-pointer flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 mix-blend-overlay"></div>
              <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300 z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
