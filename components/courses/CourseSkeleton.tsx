export default function CourseSkeleton() {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      <div className="h-48 w-full bg-gray-200"></div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
        <div className="flex gap-4 mb-6">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
        <div className="mt-auto">
          <div className="h-12 bg-gray-200 rounded-xl w-full"></div>
        </div>
      </div>
    </div>
  );
}
