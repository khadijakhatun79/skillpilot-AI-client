"use client";
import { Menu, Bell, User as UserIcon, LogOut } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

interface HeaderProps {
  setSidebarOpen: (val: boolean) => void;
}

export default function DashboardHeader({ setSidebarOpen }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 shadow-sm">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" />
      </button>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex items-center">
          <h1 className="text-xl font-semibold text-gray-800 hidden sm:block">Dashboard</h1>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <span className="sr-only">View notifications</span>
            <Bell className="h-6 w-6" />
          </button>

          {/* Profile dropdown */}
          <div className="ml-3 relative">
            <div>
              <button
                className="max-w-xs bg-white flex items-center gap-2 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="sr-only">Open user menu</span>
                <span className="hidden md:block font-medium text-gray-700">
                  {session?.user?.name || 'User'}
                </span>
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm">
                  <UserIcon className="h-5 w-5" />
                </div>
              </button>
            </div>
            {dropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-100">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900 truncate">{session?.user?.name || 'User'}</p>
                  <p className="text-xs text-gray-500 truncate">{session?.user?.email || 'user@example.com'}</p>
                </div>
                <Link 
                  href="/dashboard/profile" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  Your Profile
                </Link>
                <button 
                  className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  onClick={() => {
                    setDropdownOpen(false);
                    signOut({ callbackUrl: '/login' });
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
