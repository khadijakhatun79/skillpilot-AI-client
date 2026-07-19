import CourseCard from '@/components/ui/CourseCard';

const relatedCourses = [
  { id: '10', title: 'Figma for UI Designers', category: 'Design', level: 'Intermediate', duration: '5 Weeks', rating: 4.8 },
  { id: '6', title: 'Fullstack Next.js', category: 'Web Development', level: 'Intermediate', duration: '12 Weeks', rating: 4.8 },
  { id: '2', title: 'Advanced React Patterns', category: 'Web Development', level: 'Advanced', duration: '6 Weeks', rating: 4.9 },
];

export default function RelatedCourses() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Students also bought</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
