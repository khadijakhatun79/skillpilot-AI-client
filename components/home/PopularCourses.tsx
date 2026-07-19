"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CourseCard from "@/components/ui/CourseCard";

interface Course {
  _id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  thumbnail: string;
}

export default function PopularCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/courses?limit=4&sort=rating`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }

        const result = await res.json();

        setCourses(result.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Popular Courses
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Discover our highest rated courses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Link
              href="/courses"
              className="text-indigo-600 font-semibold hover:text-indigo-700"
            >
              View All Courses →
            </Link>
          </motion.div>
        </div>

        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
              >
                <CourseCard
                  id={course._id}
                  title={course.title}
                  category={course.category}
                  level={course.level}
                  duration={course.duration}
                  rating={course.rating}
                  thumbnail={course.thumbnail}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}