import { auth } from '@/auth';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner';
import StatsOverview from '@/components/dashboard/StatsOverview';
import UserProfileCard from '@/components/dashboard/UserProfileCard';
import QuickActions from '@/components/dashboard/QuickActions';
import ProgressChart from '@/components/dashboard/ProgressChart';
import RecentActivity from '@/components/dashboard/RecentActivity';
import AIRecommendations from '@/components/dashboard/AIRecommendations';
import LearningRoadmapPreview from '@/components/dashboard/LearningRoadmapPreview';

export const metadata = {
  title: 'Dashboard - SkillPilot AI',
};

export default async function DashboardPage() {
  const session = await auth();
  
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Main Content Area (Left 2/3) */}
          <div className="xl:col-span-2 space-y-8">
            <WelcomeBanner name={session?.user?.name} />
            <StatsOverview />
            <ProgressChart />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <RecentActivity />
              <LearningRoadmapPreview />
            </div>
          </div>

          {/* Sidebar Area (Right 1/3) */}
          <div className="xl:col-span-1 space-y-8">
            <UserProfileCard name={session?.user?.name} email={session?.user?.email} />
            <QuickActions />
            <AIRecommendations />
          </div>

        </div>
        
      </div>
    </div>
  );
}