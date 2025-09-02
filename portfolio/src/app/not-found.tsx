import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-light mb-4">404</h1>
        <h2 className="text-2xl font-medium text-primary-light mb-6">
          Page not found
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link 
          href="/"
          className="inline-block bg-primary-light text-primary-dark px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
        >
          Return to the homepage
        </Link>
      </div>
    </div>
  );
}
