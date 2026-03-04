export default function TranscriptsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-700 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            TRANSCRIPTS
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Full transcripts of our broadcasts
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    Trump Claims Disputed by Cuellar
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Full transcript of the roundtable discussion on political developments.
                  </p>
                </div>
                <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
                  View
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    Senator files Bill to Expedite 2nd Bridge for SPI
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Full transcript of the legislative coverage and analysis.
                  </p>
                </div>
                <button className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}