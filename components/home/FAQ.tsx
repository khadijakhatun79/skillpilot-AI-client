"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "How does the AI Career Coach work?",
    answer: "Our AI Career Coach analyzes your current skills, goals, and industry trends to create a custom learning roadmap. It continuously adapts based on your progress and feedback."
  },
  {
    question: "Do I get a certificate upon completion?",
    answer: "Yes, all our courses provide verified digital certificates that you can add directly to your LinkedIn profile or resume."
  },
  {
    question: "Can I access the courses on mobile?",
    answer: "Absolutely. Our platform is fully responsive and designed to work seamlessly across all devices, including smartphones and tablets."
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "We offer a 14-day money-back guarantee if you're not completely satisfied with your learning experience."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Frequently asked questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-semibold text-slate-900 text-left">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-slate-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
