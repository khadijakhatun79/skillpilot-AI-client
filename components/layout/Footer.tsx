import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-xl font-bold">SkillPilot AI</span>
            <p className="mt-2 text-sm text-gray-400">Navigate your career with AI-powered guidance.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">Courses</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex justify-center">
          <p className="text-base text-gray-400">&copy; {new Date().getFullYear()} SkillPilot AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
