export default function LatestVideos() {
  const videos = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDLYriZwi8K2s-c1hqTbeVlDVwFOljnrI7MmMQJtura_uBcByBaM2QzMOra_m2kUNcGeyN0d4GlJfi8i-KFoz4sqZ3gghXNkn6xLAuYeW037xTQ3vT4-mxyovAyWI5M42kYg0535gxCSRUBD3L6oytBIsPDk1LjvlWpOxRO7-z9D3JP31FNCjXJDW7KHquDq54FyLpTknr3Sfr6QIpck_oMRB6N0eQ1mlok_AqXzjsksYjpE0op-qqM4dkq2-mIqsFpA_2iKAQIr1x0",
      category: "Legislative Update",
      title: "Governor's Address on Property Tax Relief",
      date: "Oct 24, 2023",
      duration: "14:20",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCz2DqmowimgJ2g2IWrC9j8ISSisN78bNy2lkrS537BWBebUqA-CAIedQpTFnhqJTjmWjAwBSQov8CrQnPQ6eCgeN24OVd6Xgsg7ENQUJDLJKswDI_czdBGeRk5r6cF8-3q9B5r3SwtikrDkDuJib9l7PGrfRUxtQnl_2zQeZGybr-bnZSm20dq9a_NAkA1FsgYp5hFqS0i7GGt95huWTRl7h0lk3dxSNHYvbvoMUDJhX3O7B4Lpnm9P4C_dXT3aQqlqlrPpl2Z0HoT",
      category: "Studio Roundtable",
      title: "Debating the Future of Energy Grid Stability",
      date: "Oct 18, 2023",
      duration: "45:10",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBy7hsT_3ZgLXj9bq7Y1F49l58TQVUzeS5coqCALA1Fdj9bn_5KvJBhmsDVAFuotP6hfQVtcg8o6rDjxrY6mCkRYJAWnRDMDvpjZuPJhxgUw6ADta0xodn1H5UwufojqMMY_g8PsWYf_WgNGC_CyszWPoV4bPAARjUfDqDAVvrMaA9PL17XafdSevrEfcBpz18hM3o629FN4TfZXcZYgB-6Xuej0fUAYBiBUr30qhQoLaUNOniiK89Opo2QD2ytmDI7kycIxVOhemfq",
      category: "Exclusive Interview",
      title: "One-on-One with the Attorney General",
      date: "Oct 12, 2023",
      duration: "28:05",
    },
  ];

  return (
    <section className="bg-background-dark py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10">
        <div className="mb-8 md:mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight tracking-tight text-slate-100">
            Latest Videos
          </h2>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            View All
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group cursor-pointer overflow-hidden rounded-xl border border-primary/20 bg-background-dark/50 shadow-sm"
            >
              <div className="relative h-44 md:h-48 w-full overflow-hidden bg-slate-800">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${video.image}')` }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="rounded-full bg-primary/90 p-3 text-white backdrop-blur-sm">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-5">
                <span className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-xs font-bold text-primary">
                  {video.category}
                </span>
                <h3 className="font-display text-lg md:text-xl font-bold leading-tight text-slate-100">
                  {video.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {video.date} • {video.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}