export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200">Go Home</a>
    </main>
  );
} 