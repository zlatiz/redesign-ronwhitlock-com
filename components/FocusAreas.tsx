export default function FocusAreas() {
  const areas = [
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Legislative Updates",
      description:
        "Comprehensive analysis and timely updates on crucial Texas legislation impacting communities across the state.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Studio Roundtables",
      description:
        "Engaging discussions and debates with key political figures, experts, and community leaders in our state-of-the-art studio.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "On-Location Interviews",
      description:
        "Taking the story to the source with exclusive, hard-hitting interviews from the heart of Texas politics and events.",
    },
  ];

  return (
    <section className="bg-background-dark py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
        <div className="mb-10 md:mb-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-slate-100">
            Our Focus Areas
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-primary"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-background-dark/50 p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {area.icon}
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold leading-tight text-slate-100">
                {area.title}
              </h3>
              <p className="text-sm md:text-base font-normal leading-relaxed text-slate-400">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}