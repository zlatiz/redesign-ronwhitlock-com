import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ron Whitlock Reports
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8">
            Veteran Texas Broadcaster Ron Whitlock holds roundtable discussions, interviews, and legislative updates, in studio and on location in this independently produced TV program with in-depth perspectives on important issues.
          </p>
          <Link
            href="/videos"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
