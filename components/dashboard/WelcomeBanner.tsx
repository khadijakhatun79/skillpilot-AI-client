import { Sparkles } from 'lucide-react';

interface WelcomeBannerProps {
  name?: string | null;
}

export default function WelcomeBanner({ name }: WelcomeBannerProps) {
  const firstName = name?.split(' ')[0] || 'Explorer';

  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 overflow-hidden shadow-md">
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Welcome back, {firstName}! 👋
        </h2>
        <p className="text-indigo-100 max-w-xl text-sm md:text-base">
          You've made great progress this week. Your AI Career Coach recommends focusing on Advanced React Patterns next to reach your goal of Senior Frontend Engineer.
        </p>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none">
        <Sparkles className="w-64 h-64 text-white absolute -right-12 -top-12 transform rotate-12" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 pointer-events-none"></div>
    </div>
  );
}
