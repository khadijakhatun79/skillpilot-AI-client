import { notFound } from "next/navigation";

import CourseHero from "@/components/course-details/CourseHero";
import CourseOverview from "@/components/course-details/CourseOverview";
import CourseCurriculum from "@/components/course-details/CourseCurriculum";
import CourseReviews from "@/components/course-details/CourseReviews";
import RelatedCourses from "@/components/course-details/RelatedCourses";
import AILearningSummary from "@/components/course-details/AILearningSummary";
import NextCourseCard from "@/components/course-details/NextCourseCard";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}


async function getCourse(id: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      throw new Error("API URL is missing");
    }

    const res = await fetch(
      `${apiUrl}/api/courses/${id}`,
      {
        cache: "no-store",
      }
    );


    if (!res.ok) {
      return null;
    }


    const result = await res.json();

    return result?.data || null;


  } catch (error) {

    console.error("Failed to fetch course:", error);

    return null;
  }
}



export async function generateMetadata({
  params,
}: PageProps) {

  const { id } = await params;

  const course = await getCourse(id);


  return {
    title: course?.title 
      ? `${course.title} | SkillPilot AI`
      : "Course Details | SkillPilot AI",

    description:
      course?.description ||
      "Learn courses with SkillPilot AI",
  };
}



export default async function CourseDetailsPage({
  params,
}: PageProps) {


  const { id } = await params;


  const course = await getCourse(id);



  if (!course) {
    notFound();
  }



  return (
    <main className="min-h-screen bg-white">


      {/* Hero Section */}
      <CourseHero course={course} />



      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-14">

        <div className="grid lg:grid-cols-3 gap-10">


          {/* Left Content */}

          <div className="lg:col-span-2 space-y-10">


            <CourseOverview course={course} />



            <CourseCurriculum
              curriculum={
                course.curriculum || []
              }
            />



            <CourseReviews
              reviews={
                course.reviews || []
              }
            />


          </div>




          {/* Sidebar */}

          <aside>


            <div className="sticky top-24 space-y-6">


              <AILearningSummary
                course={course}
              />



              <NextCourseCard
                course={course}
              />


            </div>


          </aside>



        </div>


      </section>





      <RelatedCourses

        category={course.category}

        currentId={
          course._id || course.id
        }

      />



    </main>
  );
}