"use client";
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    body: "SkillPilot AI completely transformed my career. The personalized roadmap guided me perfectly from a beginner to a senior developer role in just one year.",
    author: {
      name: "Sarah Jenkins",
      role: "Senior Frontend Engineer at TechCorp",
    }
  },
  {
    body: "The AI feedback on my assignments was like having a personal tutor available 24/7. It caught things I missed and explained them clearly.",
    author: {
      name: "Michael Chen",
      role: "Data Scientist",
    }
  },
  {
    body: "I've tried many platforms, but the targeted learning approach here saved me hundreds of hours. I only learned exactly what I needed for my dream job.",
    author: {
      name: "Elena Rodriguez",
      role: "UX Designer",
    }
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">What our learners say</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 relative shadow-sm border border-slate-100"
            >
              <Quote className="absolute top-6 left-6 text-indigo-200 w-10 h-10 -z-0 opacity-50" />
              <div className="relative z-10">
                <p className="text-slate-600 italic mb-6">"{testimonial.body}"</p>
                <div>
                  <p className="text-slate-900 font-bold">{testimonial.author.name}</p>
                  <p className="text-slate-500 text-sm">{testimonial.author.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
