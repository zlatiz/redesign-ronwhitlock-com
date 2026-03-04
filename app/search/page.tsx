"use client";

import { useState } from "react";
import Image from "next/image";

const searchResults = [
  {
    id: 1,
    title: "Trump Claims Disputed by Cuellar",
    type: "Video",
    date: "October 25, 2016",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=200&h=150&fit=crop",
  },
  {
    id: 2,
    title: "Senator files Bill to Expedite 2nd Bridge for SPI",
    type: "Video",
    date: "April 5, 2017",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&h=150&fit=crop",
  },
  {
    id: 3,
    title: "Legislative Updates from Austin",
    type: "Transcript",
    date: "March 15, 2017",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=200&h=150&fit=crop",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-white text-center">
            <span className="brush-stroke">SEARCH</span>
          </h1>
          <p className="text-neutral-muted text-center mt-4 max-w-2xl mx-auto">
            Search through all Ron Whitlock Reports content
          </p>
        </div>
      </div>

      {/* Search Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="flex gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search videos, transcripts, and more..."
              className="flex-1 px-6 py-4 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-accent-purple focus:border-transparent outline-none transition-all duration-200 text-lg"
            />
            <button
              type="submit"
              className="bg-accent-purple hover:bg-accent-violet text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Search Results */}
        {hasSearched && (
          <div>
            <h2 className="text-lg font-semibold text-black mb-6">
              Search Results {query && `for "${query}"`}
            </h2>
            <div className="space-y-6">
              {searchResults.map((result) => (
                <article
                  key={result.id}
                  className="flex gap-4 p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors duration-200"
                >
                  <div className="relative w-32 h-24 rounded-md overflow-hidden bg-neutral-200 flex-shrink-0">
                    <Image
                      src={result.image}
                      alt={result.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-accent-purple uppercase tracking-wider">
                      {result.type}
                    </span>
                    <h3 className="text-lg font-semibold text-black mt-1 hover:text-accent-purple transition-colors duration-200">
                      {result.title}
                    </h3>
                    <p className="text-sm text-neutral-gray mt-1">{result.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* No Search Yet */}
        {!hasSearched && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-neutral-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-neutral-gray">
              Enter a search term to find videos, transcripts, and more.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}