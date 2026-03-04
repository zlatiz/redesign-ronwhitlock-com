import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Title with Brush Stroke */}
        <div className="mb-8">
          <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl relative inline-block">
            <span className="brush-stroke">Ron Whitlock</span>
            <br />
            <span className="brush-stroke brush-stroke-alt">Reports</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-neutral-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Veteran Texas Broadcaster Ron Whitlock holds roundtable discussions,
          interviews, and legislative updates, in studio and on location in this
          independently produced TV program with in-depth perspectives on
          important issues.
        </p>

        {/* CTA Button */}
        <Link
          href="/videos"
          className="inline-block bg-accent-purple hover:bg-accent-violet text-white font-medium px-8 py-3 rounded-md transition-colors duration-200 uppercase tracking-wide text-sm"
        >
          WHERE TO WATCH?
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-violet rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}