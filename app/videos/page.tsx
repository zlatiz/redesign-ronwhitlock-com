const videos = [
  {
    title: "Trump Claims Disputed by Cuellar",
    description: "In-depth analysis and roundtable discussion on recent political developments.",
    category: "Legislative Updates",
  },
  {
    title: "Senator files Bill to Expedite 2nd Bridge for SPI",
    description: "Coverage of the latest legislative initiatives affecting South Padre Island.",
    category: "Legislative Updates",
  },
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-700 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            VIDEOS
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            LATEST VIDEOS
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Video Thumbnail Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-navy-800 to-primary-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                      {video.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-slate-600">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Advertisements Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">ADVERTISEMENTS:</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 font-medium">Ad Space {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}