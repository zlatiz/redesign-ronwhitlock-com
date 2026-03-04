import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">RWR</div>
            <div className="text-sm font-semibold text-gray-800">Reports</div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/bio" className="text-gray-700 hover:text-primary transition-colors">
              Ron's Bio
            </Link>
            <Link href="/videos" className="text-gray-700 hover:text-primary transition-colors">
              Videos
            </Link>
            <Link href="/transcripts" className="text-gray-700 hover:text-primary transition-colors">
              Transcripts
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/search" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors">
              Search
            </Link>
          </div>

          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
