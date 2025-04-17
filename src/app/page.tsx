import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center flex-col bg-slate-200 w-full min-h-screen">
      <h1 className="text-4xl my-10 underline">NYT Most Popular Articles</h1>
      <div className="flex flex-col gap-2">
        <p>Click here to Articles 👇</p>
        <Link
          className="text-2xl text-center text-blue-800 hover:underline rounded-sm"
          href="/articles"
        >
          Articles
        </Link>
      </div>
    </main>
  );
}
