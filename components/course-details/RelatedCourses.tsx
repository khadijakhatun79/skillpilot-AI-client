import CourseCard from "@/components/ui/CourseCard";


interface Course {
  _id: string;
  title: string;
  category: string;
  level?: string;
  duration: string;
  rating?: number;
  thumbnail?: string;
}


interface RelatedCoursesProps {
  category: string;
  currentId: string;
}



async function getRelatedCourses(
  category: string,
  currentId: string
): Promise<Course[]> {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/courses?category=${encodeURIComponent(category)}&exclude=${currentId}`,
    {
      cache: "no-store",
    }
  );


  if (!res.ok) {
    return [];
  }


  const result = await res.json();

  return result.data || [];
}




export default async function RelatedCourses({
  category,
  currentId,
}: RelatedCoursesProps) {


  const courses = await getRelatedCourses(
    category,
    currentId
  );


  if (!courses.length) {
    return null;
  }



  return (
    <section className="py-16 bg-gray-50 border-t">

      <div className="max-w-7xl mx-auto px-4">


        <h2 className="text-2xl font-bold mb-8">
          Students also bought
        </h2>


     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


          {courses.map((course) => (

            <CourseCard

              key={course._id}

              id={course._id}

              title={course.title}

              category={course.category}

              level={course.level}

              duration={course.duration}

              rating={course.rating}

              thumbnail={course.thumbnail}

            />

          ))}


        </div>


      </div>

    </section>
  );
}