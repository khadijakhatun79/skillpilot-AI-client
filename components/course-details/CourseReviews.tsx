import { Star } from 'lucide-react';

const reviews = [
  {
    author: "Alex Jenkins",
    rating: 5,
    date: "2 weeks ago",
    content: "Absolutely fantastic course. The AI feedback on my code submissions was incredibly helpful and pointed out edge cases I completely missed. Highly recommend!"
  },
  {
    author: "Samantha Lee",
    rating: 5,
    date: "1 month ago",
    content: "Very comprehensive. I've taken other courses before, but the pacing and depth here are unmatched. The real-world projects were exactly what I needed for my portfolio."
  },
  {
    author: "David Chen",
    rating: 4,
    date: "2 months ago",
    content: "Great content and structure. Some of the advanced topics could use a bit more explanation, but the AI coach helped clarify my doubts quickly."
  }
];

export default function CourseReviews() {
  return (
    <section className="py-12 border-b border-gray-100">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Student Reviews</h2>
        <div className="flex items-center bg-amber-50 px-4 py-2 rounded-lg border border-amber-100 shadow-sm">
          <Star className="w-5 h-5 text-amber-500 fill-current mr-2" />
          <span className="font-bold text-gray-900">4.8</span>
          <span className="text-gray-500 ml-1 text-sm">course rating</span>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-bold text-gray-900">{review.author}</h4>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{review.content}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 w-full py-3.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors shadow-sm">
        Load More Reviews
      </button>
    </section>
  );
}
