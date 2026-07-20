import Link from "next/link";
import Image from "next/image";
import { Star, Clock, BookOpen } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  level?: string;
  duration: string;
  rating?: number;
  thumbnail?: string;
}



export default function CourseCard({
  id,
  title,
  category,
  level,
  duration,
  rating = 0,
  thumbnail,
}: CourseCardProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition">
      <div className="relative h-48 w-full">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600" />
        )}

        <span className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-xs font-semibold">
          {category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-xl line-clamp-2 mb-3">
          {title}
        </h3>

        <div className="space-y-2 text-gray-600 text-sm">

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {duration}
          </div>

          {level && (
            <div className="flex items-center gap-2">
              <BookOpen size={16} />
              {level}
            </div>
          )}

          <div className="flex items-center gap-2 text-yellow-500">
            <Star size={16} fill="currentColor" />
            {rating}
          </div>

        </div>

        <Link
          href={`/courses/${id}`}
          className="mt-5 block text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}