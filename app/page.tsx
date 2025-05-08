export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-primary">Welcome to QikTix UK!</h1>
      <p className="text-lg text-gray-700 mb-8">Discover and book tickets for the best events across the UK.</p>
      <a href="/events" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200">Browse Events</a>
    </main>
  );
} 