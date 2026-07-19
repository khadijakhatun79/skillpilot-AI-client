"use client";
import { motion } from 'framer-motion';
import CourseCard from '@/components/ui/CourseCard';
import Link from 'next/link';

const placeholderCourses = [
  { id: '1', title: 'Machine Learning Fundamentals', category: 'Data Science', duration: '8 Weeks', rating: 4.8 },
  { id: '2', title: 'Advanced React Patterns', category: 'Web Development', duration: '6 Weeks', rating: 4.9 },
  { id: '3', title: 'Cloud Architecture with AWS', category: 'Cloud Computing', duration: '10 Weeks', rating: 4.7 },
  { id: '4', title: 'UI/UX Design Systems', category: 'Design', duration: '4 Weeks', rating: 4.9 },
];

export default function PopularCourses() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Popular Courses</h2>
            <p className="mt-4 text-xl text-slate-600">Discover our most highly-rated programs chosen by thousands of learners.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-6 md:mt-0"
          >
            <Link href="/courses" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center group">
              View all courses <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {placeholderCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
