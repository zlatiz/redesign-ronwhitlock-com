'use client';

import { useState } from 'react';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would go here
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            SEARCH
          </h1>
          <p className="text-lg text-gray-700">
            Search Ron Whitlock Reports content
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search videos, transcripts, and more..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-lg"
              />
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900">Popular Topics</h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-blue-50 text-primary rounded-full hover:bg-blue-100 transition-colors">
                Trump Claims Disputed by Cuellar
              </button>
              <button className="px-4 py-2 bg-blue-50 text-primary rounded-full hover:bg-blue-100 transition-colors">
                Senator files Bill to Expedite 2nd Bridge for SPI
              </button>
              <button className="px-4 py-2 bg-blue-50 text-primary rounded-full hover:bg-blue-100 transition-colors">
                Legislative Updates
              </button>
              <button className="px-4 py-2 bg-blue-50 text-primary rounded-full hover:bg-blue-100 transition-colors">
                Roundtable Discussions
              </button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Content</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <h4 className="font-semibold text-gray-900">Trump Claims Disputed by Cuellar</h4>
                <p className="text-sm text-gray-600">Latest video episode</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <h4 className="font-semibold text-gray-900">Senator files Bill to Expedite 2nd Bridge for SPI</h4>
                <p className="text-sm text-gray-600">Latest video episode</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
