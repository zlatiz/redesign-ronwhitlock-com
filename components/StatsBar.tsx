export default function StatsBar() {
  return (
    <section className="bg-accent-violet py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 md:space-y-6">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white italic">
            Independently Produced TV Program
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white italic">
            Roundtable Discussions & Interviews
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white italic">
            In-Depth Legislative Updates
          </p>
        </div>
      </div>
    </section>
  );
}