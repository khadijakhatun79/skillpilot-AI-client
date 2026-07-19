import { User, Settings, ShieldCheck, Mail } from 'lucide-react';
import Link from 'next/link';

interface UserProfileCardProps {
  name?: string | null;
  email?: string | null;
}

export default function UserProfileCard({ name, email }: UserProfileCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-gray-100 to-gray-200"></div>
      <div className="px-6 pb-6 relative">
        <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center absolute -top-10 left-6 text-indigo-600 bg-indigo-50">
          <User className="w-10 h-10" />
        </div>
        
        <div className="pt-12">
          <h3 className="text-lg font-bold text-gray-900">{name || 'Demo User'}</h3>
          <p className="text-sm text-gray-500 flex items-center mt-1 truncate">
            <Mail className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
            <span className="truncate">{email || 'user@example.com'}</span>
          </p>
          
          <div className="mt-4 flex items-center space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              Pro Member
            </span>
          </div>

          <div className="mt-6 border-t border-gray-100 pt-4">
            <Link 
              href="/dashboard/profile" 
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <Settings className="w-4 h-4 mr-2" />
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
