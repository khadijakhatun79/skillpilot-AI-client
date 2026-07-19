import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Clock3,
  BookOpen,
  Users,
  PlayCircle,
  User,
} from "lucide-react";

interface CourseHeroProps {
  course: {
    _id: string;
    title: string;
    description: string;
    category: string;
    level: string;
    duration: string;
    rating: number;
    students: number;
    thumbnail: string;
    instructor: string;
    price: number;
    previewUrl?: string;
  };
}

export default function CourseHero({ course }: CourseHeroProps) {
  const {
    _id,
    title,
    description,
    category,
    level,
    duration,
    rating,
    students,
    thumbnail,
    instructor,
    price,
    previewUrl,
  } = course;
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Breadcrumb */}
        <div className="text-sm text-slate-300 mb-8">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>

          <Link href="/courses">Courses</Link>

          <span className="mx-2">/</span>

          <span>{category}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <span className="inline-block bg-indigo-600 px-4 py-1 rounded-full text-sm mb-5">
              {category}
            </span>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              {title}
            </h1>

            <p className="text-slate-300 text-lg leading-8 mb-8">
              {description}
            </p>

            <div className="flex flex-wrap gap-6 text-sm mb-10">

              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400 w-5 h-5" />
                {rating}
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                {students}+ Students
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="w-5 h-5" />
                {duration}
              </div>

              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {level}
              </div>

              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {instructor}
              </div>

            </div>

            <div className="flex gap-4">

              <Link
                href={`/checkout/${_id}`}
                className="inline-flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition px-8 py-4 rounded-xl font-semibold"
              >
                Enroll Now
              </Link>

              <a
              href={previewUrl || "https://www.youtube.com/watch?v=_sI_Ps7JSEk&themeRefresh=1"}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition"
            >
              <PlayCircle size={20} />
              Watch Preview
            </a>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

              <div className="relative h-72">

                <Image
                  src={
                    thumbnail ||
                    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
                  }
                  alt={title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8 text-black">

                <div className="flex justify-between items-center mb-6">

                  <div>

                    <p className="text-gray-500 text-sm">
                      Course Price
                    </p>

                    <h2 className="text-4xl font-bold text-indigo-600">
                      ${price}
                    </h2>

                  </div>

                  <div className="text-right">

                    <p className="text-gray-500 text-sm">
                      Level
                    </p>

                    <h3 className="font-semibold">
                      {level}
                    </h3>

                  </div>

                </div>

               <Link
                href={`/checkout/${_id}`}
                className="block w-full text-center bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                Enroll This Course
              </Link> 

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}