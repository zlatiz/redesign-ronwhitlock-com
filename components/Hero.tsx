export default function Hero() {
  return (
    <section
      className="relative flex min-h-[500px] md:min-h-[600px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-16 md:py-20 md:px-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDY4fTSGzk5c2AwSKdE4YlPikDiSlzp62Jov9KQJN-t8eGs4LSfzKNPIHMV7tV6T6ktxf7CxbOjXeEEymQl8i22_9MvnBhLHShT4MPXx8IKOkHtd94VRR6KuKdxb3YPYRQGONa8C-vWr5Fr5y4eaWOuVklNr25faPbm2Wy1o8qlwjcKR06EP7z1WL6oBK3bLvReO4FNIs7YpG3--SPKhY6L5otK7VSCYgBKwume4ShROHM-FNTO3aq39saAHKfw9H3V3tvCGRo3TITi")`,
      }}
    >
      <div className="z-10 flex max-w-[960px] flex-col items-center gap-6 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white">
          Ron Whitlock Reports
        </h1>
        <p className="max-w-3xl text-base sm:text-lg md:text-xl font-normal leading-relaxed text-slate-200">
          In-depth perspectives on Texas legislation, studio roundtables, and
          exclusive interviews from a 30-year veteran.
        </p>
        <button className="mt-4 flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold leading-normal tracking-wide text-white transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/30">
          <span className="truncate">Watch Latest Reports</span>
        </button>
      </div>
    </section>
  );
}