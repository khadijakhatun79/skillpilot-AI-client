"use client";

import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import FilterSidebar from "./FilterSidebar";
import SortDropdown from "./SortDropdown";
import CourseCard from "@/components/ui/CourseCard";
import CourseSkeleton from "./CourseSkeleton";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";
import { Filter, X } from "lucide-react";

interface Course {
  _id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  thumbnail: string;
}

const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const ITEMS_PER_PAGE = 8;

export default function CoursesView() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);

        const params = new URLSearchParams();

        if (searchQuery) params.append("search", searchQuery);

        if (selectedCategories.length) {
          params.append("category", selectedCategories.join(","));
        }

        if (selectedLevels.length) {
          params.append("level", selectedLevels.join(","));
        }

        params.append("sort", sortBy);
        params.append("page", currentPage.toString());
        params.append("limit", ITEMS_PER_PAGE.toString());

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/courses?${params.toString()}`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }

        const result = await res.json();

        const courseData: Course[] = result.data || [];

        setCourses(courseData);

        if (result.meta?.pagination?.totalPages) {
          setTotalPages(result.meta.pagination.totalPages);
        } else {
          setTotalPages(1);
        }

        const uniqueCategories = [
          ...new Set(courseData.map((course) => course.category)),
        ];

        setCategories(uniqueCategories.sort());
      } catch (err) {
        console.error(err);
        setCourses([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [
    searchQuery,
    selectedCategories,
    selectedLevels,
    sortBy,
    currentPage,
  ]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );

    setCurrentPage(1);
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level)
        ? prev.filter((item) => item !== level)
        : [...prev, level]
    );

    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedLevels([]);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Explore Courses</h1>
          <p className="text-gray-600 mt-2">
            Find the perfect course to accelerate your career.
          </p>
        </div>

        <SortDropdown
          value={sortBy}
          onChange={(value) => {
            setSortBy(value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:hidden flex gap-3 mb-4">
          <SearchBar
            value={searchQuery}
            onChange={(value) => {
              setSearchQuery(value);
              setCurrentPage(1);
            }}
          />

          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="p-3 border rounded-lg bg-white"
          >
            {isMobileFilterOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Filter className="w-5 h-5" />
            )}
          </button>
        </div>

        <aside
          className={`lg:w-1/4 ${
            isMobileFilterOpen ? "block" : "hidden"
          } lg:block`}
        >
          <div className="hidden lg:block mb-6">
            <SearchBar
              value={searchQuery}
              onChange={(value) => {
                setSearchQuery(value);
                setCurrentPage(1);
              }}
            />
          </div>

          <FilterSidebar
            categories={categories}
            levels={LEVELS}
            selectedCategories={selectedCategories}
            selectedLevels={selectedLevels}
            onCategoryChange={handleCategoryChange}
            onLevelChange={handleLevelChange}
          />
        </aside>

        <main className="lg:w-3/4">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <CourseSkeleton key={index} />
              ))}
            </div>
          ) : courses.length === 0 ? (
            <EmptyState onClear={clearFilters} />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
}