export default function ServicesPage() {
  const services = [
    {
      icon: (
        <svg
          className="w-10 h-10"
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
        "Comprehensive analysis and timely updates on crucial Texas legislation impacting communities across the state. We cover every major bill and provide expert commentary on how it affects you.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
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
        "Engaging discussions and debates with key political figures, experts, and community leaders in our state-of-the-art studio. Hear diverse perspectives on the issues that matter most.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
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
        "Taking the story to the source with exclusive, hard-hitting interviews from the heart of Texas politics and events. We go where the news happens.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Transcripts",
      description:
        "Full written transcripts of all our broadcasts, making our content accessible and searchable for researchers, journalists, and engaged citizens.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Video Archive",
      description:
        "Access our complete library of past broadcasts. Every interview, roundtable, and legislative update is preserved and available for viewing.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Community Engagement",
      description:
        "We believe in two-way communication. Engage with us through social media, submit questions for our roundtables, and share story tips.",
    },
  ];

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="font-display text-4xl md:text-6xl font-black leading-tight tracking-tight text-white text-center">
            Our Services
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 bg-primary"></div>
          <p className="text-center text-slate-300 mt-6 max-w-2xl mx-auto">
            Veteran Texas Broadcaster Ron Whitlock holds roundtable discussions,
            interviews, and legislative updates, in studio and on location.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 px-4 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-background-dark/50 p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/40"
              >
                <div className="flex size-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight text-slate-100">
                  {service.title}
                </h3>
                <p className="text-base font-normal leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-4 md:px-10 bg-primary">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Stay Informed?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Watch Ron Whitlock Reports for in-depth perspectives on important
            Texas issues.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-lg">
            Watch Latest Reports
          </button>
        </div>
      </section>
    </div>
  );
}