"use client";
import { motion } from 'framer-motion';
import { Brain, Target, Map, Zap, LineChart, ShieldCheck } from 'lucide-react';

const features = [
  {
    name: 'AI Career Coach',
    description: 'Get personalized career advice and guidance powered by advanced AI models.',
    icon: Brain,
  },
  {
    name: 'Smart Roadmaps',
    description: 'Dynamic learning paths that adapt to your progress and changing industry demands.',
    icon: Map,
  },
  {
    name: 'Skill Gap Analysis',
    description: 'Identify what you need to learn to reach your dream job with precision.',
    icon: Target,
  },
  {
    name: 'Instant Feedback',
    description: 'Real-time AI evaluation of your assignments, quizzes, and projects.',
    icon: Zap,
  },
  {
    name: 'Progress Tracking',
    description: 'Visualize your learning journey with comprehensive analytics and insights.',
    icon: LineChart,
  },
  {
    name: 'Verified Credentials',
    description: 'Earn blockchain-backed certificates that employers trust and value.',
    icon: ShieldCheck,
  },
];

export default function AIFeatures() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-slate-900 sm:text-4xl"
          >
            Intelligent features for smarter learning
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-slate-600"
          >
            Our platform leverages cutting-edge artificial intelligence to provide a tailored educational experience that guarantees results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-6">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.name}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
