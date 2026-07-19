"use client";

import { useState } from "react";
import {
  ChevronDown,
  PlayCircle,
  FileText,
  Lock,
} from "lucide-react";

interface Lesson {
  type: "video" | "reading";
  title: string;
  duration: string;
  free: boolean;
}

interface Module {
  title: string;
  lessons: number;
  duration: string;
  items: Lesson[];
}

interface CourseCurriculumProps {
  curriculum?: Module[];
}

const defaultCurriculum: Module[] = [
  {
    title: "Module 1: Introduction & Setup",
    lessons: 4,
    duration: "45m",
    items: [
      { type: "video", title: "Course Overview", duration: "5:00", free: true },
      { type: "video", title: "Environment Setup", duration: "15:00", free: true },
      { type: "reading", title: "Required Tools Checklist", duration: "10:00", free: false },
      { type: "video", title: "Your First Application", duration: "15:00", free: false },
    ],
  },
  {
    title: "Module 2: Core Concepts",
    lessons: 6,
    duration: "2h 15m",
    items: [
      { type: "video", title: "Understanding the Architecture", duration: "20:00", free: false },
      { type: "video", title: "State Management Basics", duration: "25:00", free: false },
      { type: "reading", title: "Component Lifecycle", duration: "15:00", free: false },
      { type: "video", title: "Data Fetching Strategies", duration: "30:00", free: false },
      { type: "video", title: "Routing Fundamentals", duration: "25:00", free: false },
      { type: "reading", title: "Module 2 Quiz", duration: "20:00", free: false },
    ],
  },
  {
    title: "Module 3: Advanced Patterns",
    lessons: 5,
    duration: "3h 30m",
    items: [
      { type: "video", title: "Performance Optimization", duration: "45:00", free: false },
      { type: "video", title: "Authentication & Security", duration: "50:00", free: false },
      { type: "video", title: "State Management Advanced", duration: "40:00", free: false },
      { type: "reading", title: "Testing Methodologies", duration: "30:00", free: false },
      { type: "video", title: "Deployment Pipeline", duration: "45:00", free: false },
    ],
  },
];

export default function CourseCurriculum({
  curriculum,
}: CourseCurriculumProps) {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const modules =
    curriculum && curriculum.length > 0
      ? curriculum
      : defaultCurriculum;

  const totalModules = modules.length;

  const totalLessons = modules.reduce(
    (sum, module) => sum + module.lessons,
    0
  );

  return (
    <section className="py-12 border-b border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Curriculum
      </h2>

      <p className="text-gray-500 mb-8">
        {totalModules} Modules • {totalLessons} Lessons
      </p>

      <div className="space-y-4">
        {modules.map((module, index) => {
          const isOpen = openModule === index;

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpenModule(isOpen ? null : index)
                }
                className="w-full px-6 py-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900">
                    {module.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {module.lessons} lessons • {module.duration}
                  </p>
                </div>

                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="divide-y divide-gray-100">
                  {module.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center px-6 py-4 hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        {item.type === "video" ? (
                          <PlayCircle className="w-5 h-5 mr-3 text-indigo-600" />
                        ) : (
                          <FileText className="w-5 h-5 mr-3 text-indigo-600" />
                        )}

                        <span>{item.title}</span>
                      </div>

                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        {item.free && (
                          <span className="text-indigo-600 font-medium">
                            Preview
                          </span>
                        )}

                        <span>{item.duration}</span>

                        {!item.free && (
                          <Lock className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}