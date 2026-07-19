import CourseHero from '@/components/course-details/CourseHero';
import CourseOverview from '@/components/course-details/CourseOverview';
import CourseCurriculum from '@/components/course-details/CourseCurriculum';
import CourseReviews from '@/components/course-details/CourseReviews';
import RelatedCourses from '@/components/course-details/RelatedCourses';
import AILearningSummary from '@/components/course-details/AILearningSummary';
import NextCourseCard from '@/components/course-details/NextCourseCard';

export const metadata = {
  title: 'Course Details - SkillPilot AI',
  description: 'View course curriculum, reviews, and enroll.',
};

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  // Mock data for the specific course based on ID (Placeholder)
  const courseData = {
    title: 'Advanced Web Development Architecture',
    category: 'Web Development',
    level: 'Advanced',
    duration: '10 Weeks',
    rating: 4.9,
    students: '12,500+'
  };

  return (
    <div className="min-h-screen bg-white">
      <CourseHero {...courseData} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content (Left Column) */}
          <div className="lg:w-2/3">
            <CourseOverview />
            <CourseCurriculum />
            <CourseReviews />
          </div>

          {/* Sidebar (Right Column) */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <AILearningSummary />
              <NextCourseCard />
            </div>
          </div>
          
        </div>
      </div>

      {/* Full-width related courses section at the bottom */}
      <RelatedCourses />
    </div>
  );
}