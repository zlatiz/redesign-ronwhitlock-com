const stats = [
  { value: "500+", label: "Reports Generated" },
  { value: "120+", label: "Clients Served" },
  { value: "25+", label: "Years Experience" },
];

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-primary-700 via-primary-600 to-teal-600 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-teal-300 mb-2">
                {stat.value}
              </div>
              <div className="text-white/90 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}