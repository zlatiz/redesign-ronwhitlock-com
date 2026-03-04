import Link from 'next/link';

export default function LatestVideos() {
  const videos = [
    {
      title: 'Trump Claims Disputed by Cuellar',
      description: 'Watch the latest episode'
    },
    {
      title: 'Senator files Bill to Expedite 2nd Bridge for SPI',
      description: 'Watch the latest episode'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
          LATEST VIDEOS
        </h2>
        <p className="text-center text-gray-600 mb-12">ADVERTISEMENTS:</p>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4">{video.description}</p>
                <Link
                  href="/videos"
                  className="text-primary font-semibold hover:text-primary-dark transition-colors"
                >
                  Watch Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">ADVERTISEMENTS:</p>
          <Link
            href="/videos"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-dark transition-colors"
          >
            View All Videos
          </Link>
        </div>
      </div>
    </section>
  );
}
