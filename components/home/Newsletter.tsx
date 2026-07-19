"use client";
import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Subscribe to our newsletter</h2>
          <p className="mt-4 text-lg text-slate-600">
            Get the latest updates on AI in tech, new course announcements, and exclusive offers straight to your inbox.
          </p>
          <form className="mt-8 sm:flex justify-center max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input 
              id="email-address" 
              name="email" 
              type="email" 
              autoComplete="email" 
              required 
              className="w-full px-5 py-3 border border-slate-300 shadow-sm placeholder-slate-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs rounded-xl" 
              placeholder="Enter your email" 
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button 
                type="submit" 
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-slate-500">
            We care about the protection of your data. Read our <a href="#" className="text-indigo-600 font-medium underline">Privacy Policy</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
