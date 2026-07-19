"use client";
import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Active Learners', value: '100K+' },
  { id: 2, name: 'Courses Available', value: '500+' },
  { id: 3, name: 'Career Transitions', value: '10,000+' },
  { id: 4, name: 'Hiring Partners', value: '250+' },
];

export default function CareerStatistics() {
  return (
    <section className="bg-indigo-700 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-indigo-200 sm:text-base">{stat.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
