import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  onClear: () => void;
}

export default function EmptyState({ onClear }: EmptyStateProps) {
  return (
    <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 border-dashed">
      <SearchX className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900">No courses found</h3>
      <p className="mt-2 text-sm text-gray-500 max-w-sm mx-auto">
        We couldn't find any courses matching your current search and filter criteria.
      </p>
      <div className="mt-6">
        <button
          onClick={onClear}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
        >
          Clear all filters
        </button>
      </div>
    </div>
  );
}
