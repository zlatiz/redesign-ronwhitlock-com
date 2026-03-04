export default function VideosPage() {
  const videos = [
    {
      title: 'Trump Claims Disputed by Cuellar',
      description: 'Watch the latest episode discussing important political developments'
    },
    {
      title: 'Senator files Bill to Expedite 2nd Bridge for SPI',
      description: 'Legislative updates on infrastructure projects'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            VIDEOS
          </h1>
          <p className="text-lg text-gray-700">
            Watch the latest episodes of Ron Whitlock Reports
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">LATEST VIDEOS</h2>
          <p className="text-gray-600">ADVERTISEMENTS:</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <button className="text-primary font-semibold hover:text-primary-dark transition-colors">
                  Watch Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">ADVERTISEMENTS:</p>
        </div>
      </div>
    </div>
  );
}
