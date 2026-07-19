"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-indigo-600 rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-indigo-200">Start your free trial today.</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-100 max-w-2xl">
                Join thousands of developers and designers who are advancing their careers with our AI-driven learning platform.
              </p>
            </div>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-xl text-indigo-600 bg-white hover:bg-indigo-50 transition-colors"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
