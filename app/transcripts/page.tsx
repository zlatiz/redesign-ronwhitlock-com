import Link from "next/link";

const transcripts = [
  {
    id: 1,
    title: "Trump Claims Disputed by Cuellar",
    date: "October 25, 2016",
    excerpt: "Full transcript of the discussion analyzing recent political claims...",
  },
  {
    id: 2,
    title: "Senator files Bill to Expedite 2nd Bridge for SPI",
    date: "April 5, 2017",
    excerpt: "Complete transcript covering the proposed infrastructure bill for South Padre Island...",
  },
  {
    id: 3,
    title: "Legislative Updates from Austin - Weekly Roundup",
    date: "March 15, 2017",
    excerpt: "Transcript of the weekly legislative update covering key developments...",
  },
  {
    id: 4,
    title: "Roundtable Discussion: Texas Economy",
    date: "February 20, 2017",
    excerpt: "Full transcript of the expert panel discussion on the state of Texas economy...",
  },
];

export default function TranscriptsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <div className="bg-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-white text-center">
            <span className="brush-stroke">TRANSCRIPTS</span>
          </h1>
          <p className="text-neutral-muted text-center mt-4 max-w-2xl mx-auto">
            Access full transcripts of all Ron Whitlock Reports episodes.
          </p>
        </div>
      </div>

      {/* Transcripts List */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8">
          {transcripts.map((transcript) => (
            <article
              key={transcript.id}
              className="border-b border-neutral-200 pb-8 last:border-b-0"
            >
              <p className="text-xs text-neutral-gray mb-2">{transcript.date}</p>
              <h2 className="text-xl font-semibold text-black hover:text-accent-purple transition-colors duration-200 mb-3">
                <Link href="#">{transcript.title}</Link>
              </h2>
              <p className="text-neutral-gray mb-4">{transcript.excerpt}</p>
              <Link
                href="#"
                className="text-sm font-medium text-accent-purple hover:text-accent-violet transition-colors duration-200"
              >
                Read Full Transcript →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}