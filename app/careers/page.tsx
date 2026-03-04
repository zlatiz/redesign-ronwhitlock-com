export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-700 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Careers
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join our team
          </p>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-slate-600">
            No open positions at this time. Check back later for opportunities.
          </p>
        </div>
      </section>
    </div>
  );
}