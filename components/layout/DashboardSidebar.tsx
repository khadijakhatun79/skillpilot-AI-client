"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  User, 
  Briefcase, 
  FileText, 
  MessageSquare, 
  Map, 
  Star, 
  PlusCircle, 
  Settings,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Profile', href: '/dashboard/profile', icon: User },
  { name: 'AI Career Coach', href: '/dashboard/career-coach', icon: Briefcase },
  { name: 'Resume Analyzer', href: '/dashboard/resume', icon: FileText },
  { name: 'AI Chat', href: '/dashboard/chat', icon: MessageSquare },
  { name: 'Learning Roadmap', href: '/dashboard/roadmap', icon: Map },
  { name: 'Recommendations', href: '/dashboard/recommendations', icon: Star },
  { name: 'Add Course', href: '/dashboard/add-course', icon: PlusCircle },
  { name: 'Manage Courses', href: '/dashboard/manage-courses', icon: Settings },
];

export default function DashboardSidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile drawer overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 bg-indigo-600 text-white">
          <Link href="/" className="text-lg font-bold tracking-tight">SkillPilot AI</Link>
          <button onClick={() => setIsOpen(false)} className="lg:hidden text-white hover:text-gray-200">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="h-full overflow-y-auto pb-20 pt-4">
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon
                    className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors ${
                      isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
