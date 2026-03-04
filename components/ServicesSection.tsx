const services = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        <circle cx="20" cy="16" r="8" stroke="#0891B2" strokeWidth="2" fill="#E0F2FE" />
        <circle cx="32" cy="20" r="6" stroke="#0891B2" strokeWidth="2" fill="#E0F2FE" />
        <path d="M8 40c0-8 6-14 14-14h4c8 0 14 6 14 14" stroke="#0891B2" strokeWidth="2" fill="none" />
        <circle cx="20" cy="16" r="3" fill="#0891B2" />
      </svg>
    ),
    title: "Strategic Consulting",
    description: "Leverging data to uncover opportunities to sell and strategic consulting.",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#0891B2" strokeWidth="2" fill="#E0F2FE" />
        <path d="M16 28l6-8 6 4 8-8" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="36" cy="16" r="3" fill="#0891B2" />
      </svg>
    ),
    title: "Custom Reporting",
    description: "Leveraging data to uncover opportunities and mitigate risks.",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="#0891B2" strokeWidth="2" fill="#E0F2FE" />
        <path d="M24 14v10l7 7" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 12l4-4M16 12l-4-4M32 36l4 4M16 36l-4 4" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Competitor Intelligence",
    description: "loveraging data to uncover opportunities and co-competitor Intelligence.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-12 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 border border-primary-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}