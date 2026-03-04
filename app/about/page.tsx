export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-700 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            RON&apos;S BIO
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Veteran Texas Broadcaster
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Veteran Texas Broadcaster Ron Whitlock holds roundtable discussions, interviews, and legislative updates, in studio and on location in this independently produced TV program with in-depth perspectives on important issues.
            </p>
            
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 my-12">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">WHERE TO WATCH?</h2>
              <div className="space-y-4">
                <p className="text-lg text-slate-700">
                  <span className="font-semibold text-primary-600">AIRING ON KUQI FOX38</span> in the Coastal Bend!!
                </p>
                <p className="text-lg text-slate-700">
                  Also catch us on <span className="font-semibold text-primary-600">TV 9</span> In the RGV1
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">25+</div>
                <div className="text-slate-600">Years in Broadcasting</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-slate-600">Episodes Produced</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">2</div>
                <div className="text-slate-600">TV Networks</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}