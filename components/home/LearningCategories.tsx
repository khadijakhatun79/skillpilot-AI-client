"use client";
import { motion } from 'framer-motion';
import { Code, Database, Palette, Shield, Terminal, BrainCircuit } from 'lucide-react';

const categories = [
  { name: 'Web Development', icon: Code, courses: '150+' },
  { name: 'Data Science', icon: Database, courses: '120+' },
  { name: 'UI/UX Design', icon: Palette, courses: '85+' },
  { name: 'Cybersecurity', icon: Shield, courses: '60+' },
  { name: 'DevOps', icon: Terminal, courses: '90+' },
  { name: 'AI & ML', icon: BrainCircuit, courses: '110+' },
];

export default function LearningCategories() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Top Categories</h2>
          <p className="mt-4 text-xl text-slate-600">Explore extensive libraries across the most in-demand fields.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-500 hover:shadow-md cursor-pointer transition-all text-center flex flex-col items-center justify-center"
            >
              <cat.icon className="w-8 h-8 text-slate-400 group-hover:text-indigo-600 mb-4 transition-colors" />
              <h3 className="font-semibold text-slate-900 text-sm mb-1">{cat.name}</h3>
              <p className="text-xs text-slate-500">{cat.courses} Courses</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
