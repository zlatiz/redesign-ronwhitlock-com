import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-script text-6xl md:text-8xl text-white mb-4">
          <span className="brush-stroke">404</span>
        </h1>
        <p className="text-xl text-neutral-muted mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block bg-accent-purple hover:bg-accent-violet text-white font-medium px-8 py-3 rounded-md transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}