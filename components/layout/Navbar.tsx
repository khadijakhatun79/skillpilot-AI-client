"use client";
import Link from 'next/link';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center text-xl font-bold text-indigo-600">
              SkillPilot AI
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Home</Link>
            <Link href="/courses" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Courses</Link>
            <Link href="/about" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">About</Link>
            <Link href="/contact" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Contact</Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {status === 'loading' ? (
              <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
            ) : session ? (
              <Link href="/dashboard" className="flex items-center space-x-2 text-gray-900 hover:text-indigo-600 font-medium px-3 py-2 transition-colors">
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <UserIcon className="h-5 w-5" />
                </div>
                <span>Dashboard</span>
              </Link>
            ) : (
              <>
                <Link href="/login" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">Login</Link>
                <Link href="/register" className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">Register</Link>
              </>
            )}
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1 bg-white border-b border-gray-200">
            <Link href="/courses" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Courses</Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">About</Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Contact</Link>
            
            {session ? (
              <Link href="/dashboard" className="block px-3 py-2 text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 bg-indigo-50">Go to Dashboard</Link>
            ) : (
              <>
                <Link href="/login" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Login</Link>
                <Link href="/register" className="block px-3 py-2 text-base font-medium text-indigo-600 hover:text-indigo-800 hover:bg-gray-50">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
