export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="font-display text-4xl md:text-6xl font-black leading-tight tracking-tight text-white text-center">
            About Ron Whitlock
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 bg-primary"></div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-20 px-4 md:px-10">
        <div className="mx-auto max-w-[900px]">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-primary/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                Veteran Texas Broadcaster
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Veteran Texas Broadcaster Ron Whitlock holds roundtable
                discussions, interviews, and legislative updates, in studio and
                on location in this independently produced TV program with
                in-depth perspectives on important issues.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                With over 30 years of experience in Texas broadcasting, Ron
                Whitlock has dedicated his career to bringing comprehensive
                coverage of state politics, community issues, and exclusive
                interviews to viewers across the Lone Star State.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-300 text-sm">
                    30+ Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-300 text-sm">
                    Independent Production
                  </span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-300 text-sm">
                    Texas-Focused Coverage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where to Watch */}
      <section className="py-16 md:py-20 px-4 md:px-10 bg-primary/5">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            WHERE TO WATCH?
          </h2>
          <div className="mx-auto mt-4 mb-8 h-1 w-20 bg-primary"></div>
          <p className="text-xl md:text-2xl text-slate-200 mb-4">
            AIRING ON KUQI FOX38 in the Coastal Bend!!
          </p>
          <p className="text-lg text-slate-300">
            Also catch us on TV 9 In the RGV1
          </p>
        </div>
      </section>
    </div>
  );
}