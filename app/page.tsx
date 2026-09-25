import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black-50 p-8">
  <h1 className="mb-6 text-4xl font-bold text-green-800">
    CPRG 306: Web Development 2 - Assignments
  </h1>

  <div className="flex gap-4">
    <Link href="/week-2">Week 2</Link>
    <Link href="/week-3">Week 3</Link>
  </div>

  <p className="mt-6 text-green-700">
    Assignments and projects for this course.
  </p>
</main>
  );
}
