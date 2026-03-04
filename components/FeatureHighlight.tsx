export default function FeatureHighlight() {
  return (
    <section className="bg-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200">
              <svg
                className="w-12 h-12 md:w-16 md:h-16"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Document icon */}
                <rect x="12" y="8" width="32" height="44" rx="3" fill="#E2E8F0" stroke="#0891B2" strokeWidth="2" />
                <path d="M20 20h16M20 28h16M20 36h10" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" />
                {/* Chart bars */}
                <rect x="38" y="32" width="16" height="24" rx="2" fill="#0891B2" />
                <rect x="42" y="40" width="4" height="12" fill="white" />
                <rect x="48" y="36" width="4" height="16" fill="white" />
                <rect x="36" y="44" width="4" height="8" fill="#06B6D4" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="border-l-2 border-primary-600 pl-8">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
              In-Depth Market Analysis
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Leveraging data to uncover opportunities and mitigate risks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}