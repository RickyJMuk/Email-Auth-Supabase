import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold mb-8">Welcome to My App</h1>
      <div className="flex">
        <Link href="/login" className="mr-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login
        </Link>
        <Link href="/signup" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Sign Up
        </Link>
      </div>
    </main>
  );
}
