"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-32">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-sky-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <motion.div 
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight">
              <span className="block">Master your future with</span>{' '}
              <span className="block text-indigo-600">AI-powered learning</span>
            </h1>
            <p className="mt-4 text-base text-slate-600 sm:mt-6 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-6 md:text-xl lg:mx-0">
              Unlock your potential with personalized career roadmaps, intelligent skill assessments, and industry-leading courses tailored just for you.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/register" 
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 shadow-md md:py-4 md:text-lg md:px-10 transition-all hover:-translate-y-0.5"
                >
                  Start Learning
                </Link>
                <Link 
                  href="/courses" 
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:text-indigo-600 shadow-sm md:py-4 md:text-lg md:px-10 transition-all hover:-translate-y-0.5"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="mt-16 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative mx-auto w-full rounded-[2rem] shadow-2xl lg:max-w-lg overflow-hidden border-8 border-white">
              <Image 
                src="/images/ai_hero_illustration.png" 
                alt="AI in Education" 
                width={800} 
                height={800} 
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[1.5rem]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
