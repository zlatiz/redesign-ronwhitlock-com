import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-primary-700 overflow-hidden">
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Angular shape top right */}
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary-600/20"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            transform: "rotate(45deg)",
          }}
        />
        {/* Angular shape bottom left */}
        <div 
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-navy-700/50"
          style={{
            clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
          }}
        />
        {/* Smaller accent shapes */}
        <div 
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary-500/10"
          style={{
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-accent-light/10"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
        />
        {/* Gradient overlay lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 md:py-32 lg:py-40">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            RON WHITLOCK<br />REPORTS
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Actionable Intelligence & Expert Insights for Decision Makers
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40"
          >
            Discover Your Opportunities
          </Link>
        </div>
      </div>
    </section>
  );
}