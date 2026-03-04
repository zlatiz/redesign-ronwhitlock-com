const services = [
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="20" cy="16" r="8" stroke="#0891B2" strokeWidth="2" fill="#E0F2FE" />
        <circle cx="32" cy="20" r="6" stroke="#0891B2" strokeWidth="2" fill="#E0F2FE" />
        <path d="M8 40c0-8 6-14 14-14h4c8 0 14 6 14 14" stroke="#0891B2" strokeWidth="2" fill="none" />
        <circle cx="20" cy="16" r="3" fill="#0891B2" />
      </svg>
    ),
    title: "Strategic Consulting",
    description: "Leverging data to uncover opportunities to sell and strategic consulting.",
    features: ["Market Analysis", "Competitive Positioning", "Growth Strategy"],
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#0891B2" strokeWidth="2" fill="#E0F2FE" />
        <path d="M16 28l6-8 6 4 8-8" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="16" r="3" fill="#0891B2" />
      </svg>
    ),
    title: "Custom Reporting",
    description: "Leveraging data to uncover opportunities and mitigate risks.",
    features: ["Data Visualization", "Trend Analysis", "Performance Metrics"],
  },
  {
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="#0891B2" strokeWidth="2" fill="#E0F2FE" />
        <path d="M24 14v10l7 7" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 12l4-4M16 12l-4-4M32 36l4 4M16 36l-4 4" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Competitor Intelligence",
    description: "loveraging data to uncover opportunities and co-competitor Intelligence.",
    features: ["Market Monitoring", "Competitor Analysis", "Industry Benchmarks"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-700 py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Actionable Intelligence & Expert Insights for Decision Makers
          </p>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-16 px-6 lg:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="w-28 h-28 bg-white rounded-2xl flex items-center justify-center border border-slate-200 shadow-sm">
                <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
                  <rect x="12" y="8" width="32" height="44" rx="3" fill="#E2E8F0" stroke="#0891B2" strokeWidth="2" />
                  <path d="M20 20h16M20 28h16M20 36h10" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" />
                  <rect x="38" y="32" width="16" height="24" rx="2" fill="#0891B2" />
                  <rect x="42" y="40" width="4" height="12" fill="white" />
                  <rect x="48" y="36" width="4" height="16" fill="white" />
                </svg>
              </div>
            </div>
            <div className="border-l-4 border-primary-600 pl-8">
              <h2 className="text-3xl font-bold text-navy-900 mb-3">
                In-Depth Market Analysis
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Leveraging data to uncover opportunities and mitigate risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-300 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-primary-50 rounded-xl flex items-center justify-center mb-6 border border-primary-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-slate-600">
                      <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-primary-700 via-primary-600 to-teal-600 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-teal-300 mb-2">500+</div>
              <div className="text-white/90 font-medium">Reports Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-teal-300 mb-2">120+</div>
              <div className="text-white/90 font-medium">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-teal-300 mb-2">25+</div>
              <div className="text-white/90 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}