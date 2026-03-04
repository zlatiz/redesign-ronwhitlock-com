import Image from "next/image";
import Link from "next/link";

const allVideos = [
  {
    id: 1,
    title: "Trump Claims Disputed by Cuellar",
    description: "In-depth analysis of recent political claims and their validity.",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&h=400&fit=crop",
    date: "October 25, 2016",
  },
  {
    id: 2,
    title: "Senator files Bill to Expedite 2nd Bridge for SPI",
    description: "Coverage of the proposed infrastructure bill for South Padre Island.",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop",
    date: "April 5, 2017",
  },
  {
    id: 3,
    title: "Legislative Updates from Austin",
    description: "Weekly roundup of important legislative developments in Texas.",
    image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=600&h=400&fit=crop",
    date: "March 15, 2017",
  },
  {
    id: 4,
    title: "Roundtable Discussion: Texas Economy",
    description: "Expert panel discusses the state of the Texas economy.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop",
    date: "February 20, 2017",
  },
  {
    id: 5,
    title: "Coastal Bend Community Spotlight",
    description: "Highlighting local initiatives and community leaders.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    date: "January 10, 2017",
  },
  {
    id: 6,
    title: "Interview: Local Business Leaders",
    description: "Conversations with entrepreneurs shaping the local economy.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
    date: "December 5, 2016",
  },
];

export default function VideosPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-white text-center">
            <span className="brush-stroke">LATEST VIDEOS</span>
          </h1>
          <p className="text-neutral-muted text-center mt-4 max-w-2xl mx-auto">
            Watch roundtable discussions, interviews, and legislative updates from Ron Whitlock Reports.
          </p>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allVideos.map((video) => (
            <article key={video.id} className="group">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-neutral-200 mb-4">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent-purple rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-xs text-neutral-gray mb-2">{video.date}</p>
              <h2 className="text-lg font-semibold text-black group-hover:text-accent-purple transition-colors duration-200 mb-2">
                {video.title}
              </h2>
              <p className="text-sm text-neutral-gray">{video.description}</p>
            </article>
          ))}
        </div>

        {/* Advertisements Section */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <h3 className="text-sm font-semibold text-neutral-gray uppercase tracking-wider mb-6">
            ADVERTISEMENTS:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-100 rounded-lg p-8 text-center">
              <p className="text-neutral-gray">Advertisement Space</p>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8 text-center">
              <p className="text-neutral-gray">Advertisement Space</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}