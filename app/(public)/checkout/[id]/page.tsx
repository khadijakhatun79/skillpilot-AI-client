interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getCourse(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/courses/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  const result = await res.json();

  return result.data;
}

export default async function CheckoutPage({ params }: PageProps) {
  const { id } = await params;

  const course = await getCourse(id);

  if (!course) {
    return (
      <div className="py-20 text-center">
        Course not found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-5 py-20">
      <h1 className="text-4xl font-bold mb-10">
        Checkout
      </h1>

      <div className="border rounded-2xl p-8 shadow">

        <h2 className="text-2xl font-semibold">
          {course.title}
        </h2>

        <p className="mt-3 text-gray-600">
          {course.description}
        </p>

        <div className="mt-6 space-y-2">
          <p>
            <strong>Category:</strong> {course.category}
          </p>

          <p>
            <strong>Level:</strong> {course.level}
          </p>

          <p>
            <strong>Duration:</strong> {course.duration}
          </p>

          <p className="text-3xl font-bold text-indigo-600">
            ${course.price}
          </p>
        </div>

        <button
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-xl font-semibold"
        >
          Proceed to Payment
        </button>

      </div>
    </div>
  );
}