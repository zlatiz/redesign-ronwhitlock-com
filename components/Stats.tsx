export default function Stats() {
  const stats = [
    { value: "30+", label: "Years Broadcasting" },
    { value: "FOX38", label: "Airing Network" },
    { value: "Texas", label: "In-Depth Coverage" },
  ];

  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:gap-8 divide-y divide-white/20 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2 py-4 md:py-0">
              <p className="font-display text-4xl md:text-5xl font-black text-white">
                {stat.value}
              </p>
              <p className="text-base md:text-lg font-medium text-white/90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}