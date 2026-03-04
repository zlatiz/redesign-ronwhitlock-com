import Image from "next/image";
import Link from "next/link";

const videos = [
  {
    id: 1,
    title: "Trump Claims Disputed by Cuellar",
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400&h=300&fit=crop",
    href: "/videos",
  },
  {
    id: 2,
    title: "Senator files Bill to Expedite 2nd Bridge for SPI",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=400&h=300&fit=crop",
    href: "/videos",
  },
  {
    id: 3,
    title: "Legislative Updates from Austin",
    image:
      "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=400&h=300&fit=crop",
    href: "/videos",
  },
  {
    id: 4,
    title: "Roundtable Discussion: Texas Economy",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop",
    href: "/videos",
  },
];

export default function LatestVideos() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tight mb-12">
          LATEST VIDEOS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video) => (
            <Link
              key={video.id}
              href={video.href}
              className="group block"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-200 mb-3">
                <Image
                  src={video.image}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-sm font-medium text-black group-hover:text-accent-purple transition-colors duration-200">
                {video.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}